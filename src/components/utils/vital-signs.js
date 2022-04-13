const getBPColor = (systolic, diastolic) => {
  if (systolic < 120 && diastolic < 80) {
    return "#388e3c";
  } else if (systolic >= 120 && systolic <= 129 && diastolic < 80) {
    return "#ff6d00";
  } else if (
    systolic >= 130 &&
    systolic <= 139 &&
    diastolic >= 80 &&
    diastolic <= 89
  ) {
    return "#fbc02d";
  } else if (systolic >= 140 && diastolic >= 90) {
    return "#d32f2f";
  } else {
    return "#000";
  }
};

const getHRColor = (measurement) => {
  if (measurement > 60 && measurement < 100) {
    return "#388e3c";
  } else {
    return "#d32f2f";
  }
};

export { getBPColor, getHRColor };
