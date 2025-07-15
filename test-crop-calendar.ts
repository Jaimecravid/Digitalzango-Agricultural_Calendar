import { generateCropCalendar } from './angola-agricultural-calendar/lib/utils/crop-utils';

// Test the generateCropCalendar function with sample data
const testGenerateCropCalendar = () => {
  try {
    console.log('Starting test...');
    
    // Test with a small set of crops and a known province
    const selectedCrops = ['milho', 'feijao', 'mandioca'];
    const province = 'Luanda';
    
    console.log('Generating calendar...');
    const calendar = generateCropCalendar(selectedCrops, province);
    
    console.log('Calendar generated successfully!');
    console.log('Calendar length:', calendar.length);
    
    // Log each month's data
    calendar.forEach(monthData => {
      console.log(`\nMonth: ${monthData.month + 1}`);
      console.log('Planting:', monthData.plantingCrops.map(c => c.name).join(', ') || 'None');
      console.log('Harvesting:', monthData.harvestingCrops.map(c => c.name).join(', ') || 'None');
    });
    
    return 'Test completed successfully!';
  } catch (error) {
    console.error('Test failed with error:', error);
    return `Test failed: ${error.message}`;
  }
};

// Run the test
const result = testGenerateCropCalendar();
console.log(result);
