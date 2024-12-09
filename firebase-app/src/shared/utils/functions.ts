export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Function to dynamically create another function
export function createRenderFunction(renderFunction) {
  const { functionBody } = renderFunction;
  const dynamicFunction = new Function(functionBody);
  return dynamicFunction();
}

// Function to dynamically create another function
export function createRenderFunctions(renderFunctions, data, setData) {
  const createdFunctions = {};
  renderFunctions.forEach((renderFunction) => {
    const { id, functionBody, saveId } = renderFunction;
    const dynamicFunction = new Function(functionBody);
    try {
      const result = dynamicFunction()(data);
      data[id] = result;
      createdFunctions[id] = result;
      if (saveId) {
        setData({ [saveId]: result });
      }
    } catch (error) {
      console.error(error.message);
    }
  });
  return createdFunctions;
}

export function setDataAtPath(path, value) {
  // Step 1: Retrieve the current data from localStorage
  var storedData = localStorage.getItem('quizCraftData');

  // Step 2: Parse the data if necessary
  var data = storedData ? JSON.parse(storedData) : {};

  // Step 3: Determine the path and update the data accordingly
  var keys = path.split('/');
  var current = data;

  for (var i = 0; i < keys.length; i++) {
    if (keys[i] !== '') {
      if (i === keys.length - 1) {
        // Last part of the path, set the value
        current[keys[i]] = value;
      } else {
        // Ensure nested objects exist
        current[keys[i]] = current[keys[i]] || {};
        current = current[keys[i]];
      }
    }
  }

  // Step 4: Convert the updated data back to a string if necessary
  var updatedData = JSON.stringify(data);

  // Step 5: Save the updated data back to localStorage
  localStorage.setItem('quizCraftData', updatedData);
}
