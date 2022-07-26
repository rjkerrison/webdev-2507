// functions are for organising/structuring our code
// they help keep things simple
function calculateAnnualBudget() {
  const costs = calculateAnnualCosts()
  const knownIncome = calculateKnownIncome()
  const spareMoney = findSpareMoney(costs, knownIncome)
  saveToDatabase(spareMoney)
}

// TODO - fill these later
function calculateAnnualCosts() {
  const costsForBuildingMaintenance = getBuildingMaintenanceCosts()
  return costsForBuildingMaintenance
}
const calculateKnownIncome = () => {}
const findSpareMoney = () => {}
const saveToDatabase = () => {}

function getBuildingMaintenanceCosts() {}

function noReturnValue() {}
