-- ============================
-- POPULATE agriculture.provinces
-- ============================
-- This script populates the 'provinces' table with all 18 provinces of Angola.
-- Population data is based on the 2014 Angolan census.
-- The 'geometry' column is left as NULL and can be populated later with geographic data (e.g., shapefiles).

INSERT INTO agriculture.provinces (province_code, province_name, capital_city, area_km2, population, region) VALUES
('AO-BGO', 'Bengo', 'Caxito', 31371, 356641, 'North'),
('AO-BGU', 'Benguela', 'Benguela', 39826, 2231385, 'Central'),
('AO-BIE', 'Bié', 'Cuíto', 70314, 1455255, 'Central'),
('AO-CAB', 'Cabinda', 'Cabinda', 7270, 716076, 'North'),
('AO-CCU', 'Cuando Cubango', 'Menongue', 199049, 534002, 'East'),
('AO-CNO', 'Cuanza Norte', 'N''dalatando', 24110, 443386, 'North'),
('AO-CUS', 'Cuanza Sul', 'Sumbe', 55600, 1881873, 'Central'),
('AO-CNN', 'Cunene', 'Ondjiva', 87342, 990087, 'South'),
('AO-HUA', 'Huambo', 'Huambo', 34270, 2019555, 'Central'),
('AO-HUI', 'Huíla', 'Lubango', 79023, 2497422, 'South'),
('AO-LUA', 'Luanda', 'Luanda', 18835, 6945386, 'North'),
('AO-LNO', 'Lunda Norte', 'Dundo', 103760, 862566, 'East'),
('AO-LSU', 'Lunda Sul', 'Saurimo', 77637, 537587, 'East'),
('AO-MAL', 'Malanje', 'Malanje', 97602, 986363, 'North'),
('AO-MOX', 'Moxico', 'Luena', 223023, 758568, 'East'),
('AO-NAM', 'Namibe', 'Moçâmedes', 57091, 495326, 'South'),
('AO-UIG', 'Uíge', 'Uíge', 58698, 1483118, 'North'),
('AO-ZAI', 'Zaire', 'M''banza-Kongo', 40130, 594428, 'North');
