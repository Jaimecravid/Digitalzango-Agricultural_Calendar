-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS postgis;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create schema
CREATE SCHEMA IF NOT EXISTS agriculture;
SET search_path TO agriculture, public;

-- ============================
-- CREATE TABLE statements
-- ============================

-- FAO crop codes
CREATE TABLE agriculture.fao_crops (
    fao_code       INTEGER PRIMARY KEY,
    crop_name      VARCHAR(100) NOT NULL,
    crop_group     VARCHAR(50) NOT NULL,
    botanical_name VARCHAR(150),
    created_at     TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at     TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Provinces
CREATE TABLE agriculture.provinces (
    province_id   SERIAL PRIMARY KEY,
    province_code VARCHAR(10) UNIQUE NOT NULL,
    province_name VARCHAR(100) NOT NULL,
    capital_city  VARCHAR(100) NOT NULL,
    area_km2      DECIMAL(10,2),
    population    INTEGER,
    region        VARCHAR(50),
    geometry      GEOMETRY(MULTIPOLYGON, 4326),
    created_at    TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at    TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Growing seasons
CREATE TABLE agriculture.growing_seasons (
    season_id   SERIAL PRIMARY KEY,
    season_name VARCHAR(50) NOT NULL,
    season_code VARCHAR(10) UNIQUE NOT NULL,
    start_month INTEGER CHECK (start_month BETWEEN 1 AND 12),
    end_month   INTEGER CHECK (end_month BETWEEN 1 AND 12),
    description TEXT,
    is_primary  BOOLEAN DEFAULT false,
    created_at  TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Event types
CREATE TABLE agriculture.event_types (
    event_type_id   SERIAL PRIMARY KEY,
    event_name      VARCHAR(50) NOT NULL,
    event_code      VARCHAR(20) UNIQUE NOT NULL,
    category        VARCHAR(30) NOT NULL,
    description     TEXT,
    requires_location BOOLEAN DEFAULT false,
    requires_quantity BOOLEAN DEFAULT false,
    created_at       TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Farms
CREATE TABLE agriculture.farms (
    farm_id             UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    farm_name           VARCHAR(150) NOT NULL,
    owner_name          VARCHAR(100),
    province_id         INTEGER REFERENCES agriculture.provinces(province_id),
    location            GEOMETRY(POINT, 4326) NOT NULL,
    farm_area           GEOMETRY(MULTIPOLYGON, 4326),
    farm_size_hectares  DECIMAL(10,4),
    elevation_meters    INTEGER,
    soil_type           VARCHAR(50),
    water_source        VARCHAR(100),
    contact_phone       VARCHAR(20),
    contact_email       VARCHAR(100),
    registration_number VARCHAR(50),
    is_active           BOOLEAN DEFAULT true,
    created_at          TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at          TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Crop cultivations
CREATE TABLE agriculture.crop_cultivations (
    cultivation_id        UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    farm_id               UUID REFERENCES agriculture.farms(farm_id) ON DELETE CASCADE,
    fao_code              INTEGER REFERENCES agriculture.fao_crops(fao_code),
    variety_name          VARCHAR(100),
    season_id             INTEGER REFERENCES agriculture.growing_seasons(season_id),
    cultivation_year      INTEGER NOT NULL,
    planted_area_hectares DECIMAL(10,4),
    cultivation_location  GEOMETRY(MULTIPOLYGON, 4326),
    planting_date         DATE,
    expected_harvest_date DATE,
    actual_harvest_date   DATE,
    yield_kg_per_hectare  DECIMAL(10,2),
    total_yield_kg        DECIMAL(12,2),
    cultivation_method    VARCHAR(50),
    seed_source           VARCHAR(100),
    notes                 TEXT,
    is_completed          BOOLEAN DEFAULT false,
    created_at            TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at            TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Agricultural events
CREATE TABLE agriculture.agricultural_events (
    event_id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    cultivation_id    UUID REFERENCES agriculture.crop_cultivations(cultivation_id) ON DELETE CASCADE,
    event_type_id     INTEGER REFERENCES agriculture.event_types(event_type_id),
    event_date        DATE NOT NULL,
    scheduled_date    DATE,
    location          GEOMETRY(MULTIPOLYGON, 4326),
    quantity_used     DECIMAL(10,3),
    unit_of_measure   VARCHAR(20),
    product_applied   VARCHAR(100),
    application_rate  VARCHAR(50),
    weather_conditions VARCHAR(100),
    labor_hours       DECIMAL(5,2),
    labor_cost        DECIMAL(10,2),
    material_cost     DECIMAL(10,2),
    equipment_used    VARCHAR(200),
    effectiveness_rating INTEGER CHECK (effectiveness_rating BETWEEN 1 AND 5),
    notes             TEXT,
    performed_by      VARCHAR(100),
    created_at        TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at        TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Agroclimatic indices
CREATE TABLE agriculture.agroclimatic_indices (
    index_id                    UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    location                    GEOMETRY(POINT, 4326) NOT NULL,
    province_id                 INTEGER REFERENCES agriculture.provinces(province_id),
    fao_code                    INTEGER REFERENCES agriculture.fao_crops(fao_code),
    observation_date            DATE NOT NULL,
    year                        INTEGER NOT NULL,
    month                       INTEGER CHECK (month BETWEEN 1 AND 12),
    dry_days_count              INTEGER,
    dry_spells_count            INTEGER,
    avg_dry_spell_length        DECIMAL(5,2),
    wet_days_count              INTEGER,
    wet_spells_count            INTEGER,
    avg_wet_spell_length        DECIMAL(5,2),
    total_precipitation_mm      DECIMAL(8,2),
    hot_days_count              INTEGER,
    heatwaves_count             INTEGER,
    max_heatwave_length         INTEGER,
    potential_evapotranspiration_mm DECIMAL(8,2),
    spei_index                  DECIMAL(6,3),
    enso_phase                  VARCHAR(20),
    enso_strength               VARCHAR(20),
    created_at                  TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Weather stations
CREATE TABLE agriculture.weather_stations (
    station_id       SERIAL PRIMARY KEY,
    station_code     VARCHAR(20) UNIQUE NOT NULL,
    station_name     VARCHAR(100) NOT NULL,
    location         GEOMETRY(POINT, 4326) NOT NULL,
    province_id      INTEGER REFERENCES agriculture.provinces(province_id),
    elevation_meters INTEGER,
    station_type     VARCHAR(50),
    is_active        BOOLEAN DEFAULT true,
    installation_date DATE,
    created_at       TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Daily weather
CREATE TABLE agriculture.daily_weather (
    weather_id             UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    station_id             INTEGER REFERENCES agriculture.weather_stations(station_id),
    observation_date       DATE NOT NULL,
    temperature_max_celsius DECIMAL(5,2),
    temperature_min_celsius DECIMAL(5,2),
    temperature_avg_celsius DECIMAL(5,2),
    humidity_percent       DECIMAL(5,2),
    rainfall_mm            DECIMAL(8,2),
    wind_speed_ms          DECIMAL(5,2),
    wind_direction_degrees INTEGER CHECK (wind_direction_degrees BETWEEN 0 AND 360),
    solar_radiation_mjm2   DECIMAL(6,2),
    evapotranspiration_mm   DECIMAL(6,2),
    created_at             TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(station_id, observation_date)
);

-- ============================
-- INDEX statements
-- ============================

CREATE INDEX idx_farms_location               ON agriculture.farms USING GIST (location);
CREATE INDEX idx_farms_area                   ON agriculture.farms USING GIST (farm_area);
CREATE INDEX idx_cultivations_location        ON agriculture.crop_cultivations USING GIST (cultivation_location);
CREATE INDEX idx_events_location              ON agriculture.agricultural_events USING GIST (location);
CREATE INDEX idx_agroclimatic_location        ON agriculture.agroclimatic_indices USING GIST (location);
CREATE INDEX idx_weather_stations_location    ON agriculture.weather_stations USING GIST (location);

CREATE INDEX idx_cultivations_year_season     ON agriculture.crop_cultivations (cultivation_year, season_id);
CREATE INDEX idx_events_date                  ON agriculture.agricultural_events (event_date);
CREATE INDEX idx_agroclimatic_date            ON agriculture.agroclimatic_indices (observation_date, year, month);
CREATE INDEX idx_weather_date                 ON agriculture.daily_weather (observation_date);

CREATE INDEX idx_cultivations_farm_crop       ON agriculture.crop_cultivations (farm_id, fao_code);
CREATE INDEX idx_events_cultivation           ON agriculture.agricultural_events (cultivation_id);
CREATE INDEX idx_farms_province               ON agriculture.farms (province_id);

CREATE INDEX idx_cultivations_province_crop_year
    ON agriculture.crop_cultivations (fao_code, cultivation_year)
    INCLUDE (farm_id)
    WHERE is_completed = false;

CREATE INDEX idx_events_type_date              ON agriculture.agricultural_events (event_type_id, event_date);
CREATE INDEX idx_agroclimatic_province_crop   ON agriculture.agroclimatic_indices (province_id, fao_code, year);

-- ============================
-- CONSTRAINT statements
-- ============================

ALTER TABLE agriculture.crop_cultivations ADD CONSTRAINT chk_planting_before_harvest
    CHECK (planting_date IS NULL OR expected_harvest_date IS NULL OR planting_date <= expected_harvest_date);

ALTER TABLE agriculture.crop_cultivations ADD CONSTRAINT chk_actual_harvest_after_planting
    CHECK (planting_date IS NULL OR actual_harvest_date IS NULL OR actual_harvest_date >= planting_date);

ALTER TABLE agriculture.crop_cultivations ADD CONSTRAINT chk_yield_positive
    CHECK (yield_kg_per_hectare IS NULL OR yield_kg_per_hectare >= 0);

ALTER TABLE agriculture.agricultural_events ADD CONSTRAINT chk_scheduled_date_valid
    CHECK (scheduled_date IS NULL OR scheduled_date >= event_date);

ALTER TABLE agriculture.farms ADD CONSTRAINT chk_farm_location_angola
    CHECK (ST_X(location) BETWEEN 11.7 AND 24.1 AND ST_Y(location) BETWEEN -18.1 AND -4.4);

-- ============================
-- TRIGGER and FUNCTION statements
-- ============================

CREATE OR REPLACE FUNCTION agriculture.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_farms_updated_at
    BEFORE UPDATE ON agriculture.farms
    FOR EACH ROW EXECUTE FUNCTION agriculture.update_updated_at_column();

CREATE TRIGGER update_cultivations_updated_at
    BEFORE UPDATE ON agriculture.crop_cultivations
    FOR EACH ROW EXECUTE FUNCTION agriculture.update_updated_at_column();

CREATE TRIGGER update_events_updated_at
    BEFORE UPDATE ON agriculture.agricultural_events
    FOR EACH ROW EXECUTE FUNCTION agriculture.update_updated_at_column();

-- ============================
-- VIEW statements
-- ============================

CREATE VIEW agriculture.v_active_cultivations AS
SELECT 
    c.cultivation_id,
    c.cultivation_year,
    f.farm_name,
    f.owner_name,
    p.province_name,
    cr.crop_name,
    s.season_name,
    c.planted_area_hectares,
    c.planting_date,
    c.expected_harvest_date,
    c.cultivation_method,
    ST_AsGeoJSON(c.cultivation_location) AS cultivation_geojson
FROM agriculture.crop_cultivations c
JOIN agriculture.farms f           ON c.farm_id       = f.farm_id
JOIN agriculture.provinces p       ON f.province_id   = p.province_id
JOIN agriculture.fao_crops cr      ON c.fao_code      = cr.fao_code
JOIN agriculture.growing_seasons s ON c.season_id     = s.season_id
WHERE c.is_completed = false
  AND f.is_active    = true;

-- ============================
-- GRANT statements
-- ============================

GRANT USAGE ON SCHEMA agriculture TO agricultural_app_user;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA agriculture TO agricultural_app_user;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA agriculture TO agricultural_app_user;
GRANT SELECT ON agriculture.v_active_cultivations TO agricultural_app_user;
