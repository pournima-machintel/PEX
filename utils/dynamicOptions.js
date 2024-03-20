const getStatusColor = (orderStatus) => {
  let statusColor = "";
  switch (orderStatus) {
    case "white":
      statusColor = "bg-white";
      break;
    case "light_grey":
      statusColor = "bg-grey-100";
      break;
    case "primary":
      statusColor = "bg-primary text-white";
      break;
    case "dark_grey":
      statusColor = "bg-grey";
      break;
    case "accent":
      statusColor = "bg-accent text-white";
      break;
    case "dark_blue":
      statusColor = "bg-dark-blue";
      break;
    case "primary-2":
      statusColor = "bg-primary text-white";
      break;
    case "primary_two":
      statusColor = "bg-primary-2 text-white";
      break;
    case "grey":
      statusColor = "bg-grey";
      break;
    case "sky_blue":
      statusColor = "bg-sky-blue";
      break;
    case "bg_blue_100":
      statusColor = "bg-blue-100";
      break;
    case "light_green":
      statusColor = "bg-light-green";
      break;
    case "primary_three":
      statusColor = "bg-primary-3";
      break;
  }
  return statusColor;
};
const getSectionPadding = (statusHeight) => {
  let paddingHeight = "";
  switch (statusHeight) {
    case "extra_large":
      paddingHeight = "py-32";
      break;
    case "large":
      paddingHeight = "py-20";
      break;
    case "medium":
      paddingHeight = "py-10";
      break;
    case "small":
      paddingHeight = "py-5";
      break;
    case "none":
      paddingHeight = "py-0";
      break;
  }
  return paddingHeight;
};
const getSectionMargin = (statusMargin) => {
  let marginHeight = "";
  switch (statusMargin) {
    case "large":
      marginHeight = "py-20";
      break;
    case "small":
      marginHeight = "py-10";
      break;
    case "none":
      marginHeight = "py-0";
      break;
  }
  return marginHeight;
};

const getButtonColor = (statusButton) => {
  let buttonColor = "";
  switch (statusButton) {
    case "accent":
      buttonColor = "btn-accent";
      break;
    case "primary":
      buttonColor = "btn-primary";
      break;
    case "outline":
      buttonColor = "btn-outline";
      break;
    case "white":
      buttonColor = "btn-white";
      break;
  }
  return buttonColor;
};

const getCardColor = (statusColor) => {
  let cardColor = "";
  switch (statusColor) {
    case "dark":
      cardColor = "bg-colors-primary text-colors-white";
      break;
    case "medium":
      cardColor = "bg-colors-primary-4 text-colors-white";
      break;
    case "light":
      cardColor = "bg-colors-primary-5 text-colors-white";
      break;
  }
  return cardColor;
};
const getTextAlign = (statusAlign) => {
  let textAlign = "";
  switch (statusAlign) {
    case "left":
      textAlign = "text-left";
      break;
    case "center":
      textAlign = "text-center";
      break;
    case "right":
      textAlign = "text-right";
      break;
  }
  return textAlign;
};

const getTextWidth = (statusWidth) => {
  let textWidth = "";
  switch (statusWidth) {
    case "left_large":
      textWidth = "lg:pr-60";
      break;
    case "left_medium":
      textWidth = "lg:pr-96";
      break;
    case "center_large":
      textWidth = "lg:px-40";
      break;
    case "center_medium":
      textWidth = "lg:px-60";
      break;
    case "right-_large":
      textWidth = "lg:pl-60";
      break;
    case "right_medium":
      textWidth = "lg:pl-96";
      break;
    case "full":
      textWidth = "lg:px-0";
      break;
  }
  return textWidth;
};

const getHeadingSize = (statusTextSize) => {
  let headingSize = "";
  switch (statusTextSize) {
    case "normal":
      headingSize = "text-base";
      break;
    case "large":
      headingSize = "text-large";
      break;
    case "xl":
      headingSize = "text-xl";
      break;
    case "n2xl":
      headingSize = "text-2xl";
      break;
    case "n3xl":
      headingSize = "text-2xl lg:text-3xl";
      break;
    case "n4xl":
      headingSize = "text-2xl lg:text-4xl";
      break;
    case "n5xl":
      headingSize = "text-4xl lg:text-5xl";
      break;
    case "n6xl":
      headingSize = "text-4xl lg:text-6xl";
      break;
  }
  return headingSize;
};

const getHeadingColor = (statusHeadingColor) => {
  let headingColor = "";
  switch (statusHeadingColor) {
    case "primary":
      headingColor = "text-primary";
      break;
    case "primary_2":
      headingColor = "text-primary-2";
      break;
    case "primary_3":
      headingColor = "text-primary-2";
      break;
    case "accent":
      headingColor = "text-accent";
      break;
    case "base":
      headingColor = "text-font";
      break;
    case "white":
      headingColor = "text-white";
      break;
    case "orange":
      headingColor = "text-orange-400";
      break;
    case "dark_grey":
      headingColor = "text-grey-900";
      break;
    case "dark_blue":
      headingColor = "text-dark-blue";
      break;
  }
  return headingColor;
};

const getHeadingWeight = (statusHeadingWeight) => {
  let headingWeight = "";
  switch (statusHeadingWeight) {
    case "light":
      headingWeight = "font-light";
      break;
    case "normal":
      headingWeight = "font-normal";
      break;
    case "semibold":
      headingWeight = "font-semibold";
      break;
    case "bold":
      headingWeight = "font-bold";
      break;
    case "extrabold":
      headingWeight = "font-extrabold";
      break;
    case "superbold":
      headingWeight = "font-black";
      break;
  }
  return headingWeight;
};

const getHeadingType = (statusHeadingType) => {
  switch (statusHeadingType) {
    case "h1":
      return "h1";
    case "h2":
      return "h2";
    case "h3":
      return "h3";
    case "h4":
      return "h4";
    case "h5":
      return "h5";
    case "h6":
      return "h6";
    // ... and so on for other heading types
    default:
      return "div"; // A default case to avoid returning undefined
  }
};

export {
  getStatusColor,
  getSectionPadding,
  getSectionMargin,
  getButtonColor,
  getCardColor,
  getTextAlign,
  getTextWidth,
  getHeadingSize,
  getHeadingColor,
  getHeadingWeight,
  getHeadingType,
};
