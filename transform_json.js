const fs = require('fs');
const path = require('path');

// Read the original JSON file
const jsonFilePath = path.join(__dirname, 'games.json');
const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));

// Transform the data
jsonData.results = jsonData.results.map(game => {
  // Transform parent_platforms from [{"platform": {...}}] to [{...}]
  if (game.parent_platforms) {
    game.parent_platforms = game.parent_platforms.map(pp => pp.platform);
  }
  
  // Transform stores from [{"id": x, "store": {...}}] to [{...}]
  if (game.stores) {
    game.stores = game.stores.map(s => s.store);
  }
  
  return game;
});

// Write the transformed data back to the file
fs.writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 2));

console.log('✅ JSON transformation completed!');
console.log('📝 Changes made:');
console.log('   - parent_platforms: Flattened to extract platform objects');
console.log('   - stores: Flattened to extract store objects');
console.log('   - genres: Already in correct format (no changes needed)');