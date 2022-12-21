const { execSync } = require("child_process");
const { DATABASE } = require("../config-env.ts");

try {
  execSync(
    `mongoimport --db ${DATABASE} --collection users --drop --file "./seed/seed-user-data.json" --jsonArray`
  );
  console.log("SEED RUNNING 🏃🏻🏃🏻🏃🏻");
} catch (err) {
  console.log(`Failed to import file into database ${DATABASE}`, err);
}
