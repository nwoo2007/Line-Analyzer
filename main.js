// Line Analyzer

// Add Event Listener
document.getElementById("analyze").addEventListener("click", analyzeLine);

// Event Function
function analyzeLine() {
  // Get Inputted Point Data (pt1x, pt1y) and (pt2x, pt2y)
  let pt1x = Number(document.getElementById("pt1x").value);
  let pt1y = Number(document.getElementById("pt1y").value);
  let pt2x = Number(document.getElementById("pt2x").value);
  let pt2y = Number(document.getElementById("pt2y").value);

  // Call Analyze Functions and Display results

  document.getElementById("length").innerHTML = getLength(
    pt1x,
    pt1y,
    pt2x,
    pt2y
  );
  document.getElementById("slope").innerHTML = getSlope(pt1x, pt1y, pt2x, pt2y);
  document.getElementById("description").innerHTML = getDescription(
    pt1x,
    pt1y,
    pt2x,
    pt2y
  );
  document.getElementById("location-1").innerHTML = getPointLocation(
    pt1x,
    pt1y
  );
  document.getElementById("location-2").innerHTML = getPointLocation(
    pt2x,
    pt2y
  );
  document.getElementById("slope-point").innerHTML = getPointSlope(
    pt1x,
    pt1y,
    pt2x,
    pt2y
  );
  document.getElementById('equation').innerHTML = getEquation(pt1x, pt1y, pt2x, pt2y);
}

// Line Analyzer Functions (Write your solutions here. Uncomment above code when ready to test)

// length of the line
// d=√((x2 – x1)² + (y2 – y1)²).
function getLength(x1, y1, x2, y2) {
  // Math.pow() method:  Math.pow(equation, exponent)
  let length = Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2);
  length = Math.sqrt(length);
  length = length.toFixed(2);
  return length;
}

// m = (y₂ - y₁) / (x₂ - x₁)
// slope = rise / run
function getSlope(x1, y1, x2, y2) {
  let slope = (y2 - y1) / (x2 - x1);
  slope = slope.toFixed(2);
  return slope;
}

// description of the type of line formed
function getDescription(x1, y1, x2, y2) {
  if (x1 == x2) {
    return "vertical";
  } else if (y1 == y2) {
    return "horizontal";
  } else if (y1 < y2) {
    return "increasing";
  } else if (y1 > y2) {
    return "decreasing";
  }
}

// Determine which quadrant points are in
function getPointLocation(x, y) {
  // origin
  if (x == 0 && y == 0) {
    return "origin";
    // x-axis
  } else if (y == 0) {
    return "x-axis";
    // y-axis
  } else if (x == 0) {
    return "y-axis";
    // (+, +)
  } else if (x > 0 && y > 0) {
    return "quadrant 1";
    // (-, +)
  } else if (x < 0 && y > 0) {
    return "quadrant 2";
    // (-, -)
  } else if (x < 0 && y < 0) {
    return "quadrant 3";
    // (+, -)
  } else if (x > 0 && y < 0) {
    return "quardant 4";
  }
}

// y - y1 = m(x-x1)
// get the point-slope in general form
function getPointSlope(x1, y1, x2, y2) {
  var m = getSlope(x1, y1, x2, y2);
  var yString = `${y1}`;
  var xString = `${x1}`; 
  var yNeg = yString.charAt(1); 
  var xNeg = xString.charAt(1); 
  var equation; 
  if (yString.charAt(0) == "-" && xString.charAt(0) == "-") {
    equation = `y + ${yNeg} = ${m}(x + ${xNeg})`;
    return equation;
  } else if (yString.charAt(0) == "-") {
    equation = `y + ${yNeg} = ${m}(x - ${x1})`;
    return equation;
  } else if (xString.charAt(0) == "-") {
    equation = `y - ${y1} = ${m}(x + ${xNeg})`;
    return equation;
  } else if (x1 == x2) {
    equation = `x = ${x1}`;
    console.log(equation);
    return equation;
  } else if (y1 == y2) {
    equation = `y = ${b}`; 
    return equation;
  } else { 
    equation = `y - ${y1} = ${m}(x - ${x1})`;
    return equation;
  }
}

// get the equation 
// Zero Slope formatting 
// E.g. (0, 3) & (2, 3) . If the slope is zero, your equation should not be y = 0x + 3.   
// Your equation should be  y = 3

// Vertical Lines 
// E.g. (7, 3) & (7, 10)  Expected equation:  x = 7

// Negative y-intercept 
// E.g. (0, -5) & (2, 7) If the b-value is negative, you would NOT see: y = 6x + −5.  
// You WOULD see:  y = 6x - 5

function getEquation(x1, y1, x2, y2) {
  var m = getSlope(x1, y1, x2, y2);
  var b = y1 - (m * x1);
  var bString = `${b}`; 
  var equation; 
  // vertical line 
  if (x1 == x2) {
    equation = `x = ${x1}`;
    console.log(equation);
    return equation;
  // zero slope formatting 
  } else if (y1 == y2) {
    equation = `y = ${b}`; 
    return equation;
  // negative y-intercept 
  } else if (bString.charAt(0) == "-") {
    let bNeg = bString.charAt(1);
    equation = `y = ${m}x - ${bNeg}`
    return equation; 
  } else {
    equation = `y = ${m}x + ${b}`; 
    return equation; 
  }
}
