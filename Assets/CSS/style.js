import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "fontFamily": "'Roboto', arial, sans-serif"
    },
    "navLogo": {
        "height": 46.63,
        "width": "auto"
    },
    "mdl-layout__header-row": {
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center",
        "backgroundColor": "#238129"
    },
    "mdl-layout__drawer>mdl-layout__title": {
        "backgroundColor": "#238129",
        "height": 151,
        "display": "flex",
        "alignItems": "flex-end",
        "paddingLeft": 8,
        "justifyContent": "flex-start"
    },
    "mdl-layout__drawer>mdl-layout-title": {
        "backgroundColor": "#238129",
        "height": 151,
        "display": "flex",
        "alignItems": "flex-end",
        "paddingLeft": 8,
        "justifyContent": "flex-start"
    },
    "logo": {
        "width": 180,
        "height": "auto"
    },
    "center-content": {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center"
    },
    "containerHeader": {
        "width": 100 * vw,
        "height": 84 * vw,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "backgroundImage": "url(\"../IMG/header.png\")",
        "backgroundSize": "cover",
        "backgroundRepeat": "no-repeat",
        "backgroundPosition": "center",
        "maxHeight": 742
    },
    "containerBody": {
        "width": "100%",
        "display": "flex",
        "justifyContent": "center",
        "textAlign": "center",
        "maxWidth": 1440,
        "height": "100%",
        "alignItems": "center"
    },
    "color1": {},
    "section1": {
        "paddingTop": 0,
        "paddingBottom": 0,
        "backgroundSize": "cover",
        "backgroundRepeat": "no-repeat",
        "backgroundPosition": "center",
        "zIndex": -1,
        "paddingRight": 0,
        "paddingLeft": 0,
        "backgroundColor": "#F5F5F5"
    },
    "frontColor": {
        "backgroundImage": "linear-gradient( to right, rgba(255, 110, 52, 0.7), rgba(35, 129, 41, 0.7))",
        "width": "100%",
        "height": "100%"
    },
    "paddingSection": {
        "paddingTop": 58,
        "paddingBottom": 48,
        "height": "100%",
        "width": "100%",
        "justifyContent": "center",
        "alignItems": "center",
        "display": "flex"
    },
    "sectionHeader1": {
        "fontSize": 43,
        "fontWeight": "300",
        "lineHeight": 1.6,
        "marginBottom": 40,
        "color": "#FF6E34"
    },
    "sectionHeader2": {
        "fontSize": 43,
        "fontWeight": "300",
        "lineHeight": 1.6,
        "marginBottom": 17,
        "color": "white"
    },
    "sectionHeader3": {
        "fontSize": 43,
        "fontWeight": "300",
        "lineHeight": 1.6,
        "color": "#FF6E34",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "sectionHeader4": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 40,
        "marginLeft": 0,
        "fontSize": 7 * vw,
        "fontWeight": "300",
        "lineHeight": 1.6,
        "color": "white",
        "textShadow": "0px 2px 3px rgba(0, 0, 0, 0.4)"
    },
    "sectionBody1": {
        "color": "black",
        "fontSize": 17,
        "fontWeight": "300",
        "fontStyle": 300,
        "lineHeight": 1.5
    },
    "sectionBody2": {
        "color": "white",
        "fontSize": 20,
        "fontWeight": "300",
        "fontStyle": 300,
        "lineHeight": 1.5,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 23,
        "marginLeft": 0
    },
    "section": {
        "paddingTop": 55,
        "paddingBottom": 48
    },
    "color2": {
        "backgroundImage": "url(\"../IMG/internshipCollage.jpg\")",
        "backgroundPosition": "center",
        "backgroundRepeat": "no-repeat",
        "backgroundSize": "cover",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "section3": {
        "paddingTop": 0,
        "paddingBottom": 0,
        "backgroundSize": "cover",
        "backgroundRepeat": "no-repeat",
        "backgroundPosition": "center",
        "zIndex": -1,
        "paddingRight": 0,
        "paddingLeft": 0,
        "backgroundColor": "#212121"
    },
    "material-icons": {
        "fontFamily": "'Material Icons'",
        "fontWeight": "normal",
        "fontStyle": "normal",
        "fontSize": 24,
        "lineHeight": 1,
        "letterSpacing": "normal",
        "textTransform": "none",
        "display": "inline-block",
        "whiteSpace": "nowrap",
        "wordWrap": "normal",
        "direction": "ltr",
        "WebkitFontFeatureSettings": "'liga'",
        "WebkitFontSmoothing": "antialiased"
    },
    "dayFin": {
        "marginLeft": 16
    },
    "aboutText": {
        "display": "flex",
        "alignItems": "center"
    },
    "mailPadding": {},
    "color3": {
        "backgroundColor": "white"
    },
    "partnerImage": {
        "width": 194,
        "height": "auto"
    },
    "imageContainer": {
        "overflow": "hidden",
        "height": 200,
        "marginBottom": 8,
        "width": "100% !important",
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center"
    },
    "imageContainer2": {
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center",
        "height": "100%"
    },
    "centralize": {
        "display": "flex",
        "justifyContent": "center"
    },
    "row": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "width": "100%"
    },
    "container-fluid": {
        "display": "flex",
        "justifyContent": "center"
    },
    "dark-bg p": {
        "color": "white"
    },
    "dark-bg section-title h2": {
        "color": "#fff"
    },
    "dark-bg mz-module-about h3": {
        "color": "#FFFFFF"
    },
    "dark-bg section-text h3": {
        "color": "#dfdfdf"
    },
    "dark-bg section-text h4": {
        "color": "#dfdfdf"
    },
    "dark-bg": {
        "backgroundColor": "#212121",
        "color": "#fff"
    },
    "sectioncontact form": {
        "marginTop": 15
    },
    "sectioncontactform-group": {
        "marginBottom": 25
    },
    "sectioncontact form-group input": {
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15,
        "border": "1px solid #BBBBBB",
        "borderRadius": 0,
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0, 0, 0, .075)",
        "boxShadow": "inset 0 0px 0px rgba(0, 0, 0, .075)",
        "fontSize": 13
    },
    "sectioncontact form-group textarea": {
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15,
        "border": "1px solid #BBBBBB",
        "borderRadius": 0,
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0, 0, 0, .075)",
        "boxShadow": "inset 0 0px 0px rgba(0, 0, 0, .075)",
        "fontSize": 13
    },
    "contact h3": {
        "marginBottom": 30
    },
    "section5": {
        "backgroundColor": "#212121 !important"
    },
    "last-row": {
        "display": "inline-block"
    },
    "CIESESEContainer": {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center",
        "height": 200
    },
    "lastCIESESE": {
        "width": 274.06,
        "height": "auto"
    },
    "footer": {
        "paddingTop": 30,
        "paddingRight": 30,
        "paddingBottom": 30,
        "paddingLeft": 30,
        "backgroundColor": "#000"
    },
    "footer p": {
        "color": "#b7b7b7",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontSize": 10,
        "textTransform": "uppercase",
        "fontWeight": "500",
        "letterSpacing": 1.6,
        "textAlign": "center"
    },
    "socialPhotos": {
        "width": "auto",
        "height": 30
    },
    "section-map": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "height": 500
    },
    "colorText": {
        "color": "#FF6E34"
    },
    "section-title h2": {
        "fontSize": 34,
        "textTransform": "uppercase",
        "color": "black",
        "fontWeight": "800",
        "letterSpacing": -0.6,
        "position": "relative",
        "marginBottom": 20,
        "paddingBottom": 15
    },
    "section-title h2:after": {
        "left": "50%",
        "zIndex": 1,
        "width": 40,
        "height": 2,
        "content": " ",
        "bottom": -5,
        "marginLeft": -20,
        "textAlign": "center",
        "position": "absolute",
        "background": "#cd1212"
    },
    "section-title p": {
        "fontSize": 15,
        "fontWeight": "300",
        "lineHeight": 25,
        "marginBottom": 24
    },
    "map-col": {
        "width": 100 * vw,
        "marginLeft": -130,
        "height": "100%"
    },
    "container-map": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "noPadding": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "mdl-layout__header-row mdl-navigation__link:hover": {
        "display": "block",
        "color": "#FF6E34",
        "lineHeight": 64,
        "paddingTop": 0,
        "paddingRight": 24,
        "paddingBottom": 0,
        "paddingLeft": 24,
        "textDecoration": "none"
    },
    "mdl-layout__header-row mdl-navigation__link:focus": {
        "display": "block",
        "color": "#FF6E34",
        "lineHeight": 64,
        "paddingTop": 0,
        "paddingRight": 24,
        "paddingBottom": 0,
        "paddingLeft": 24,
        "textDecoration": "none"
    },
    "myVideo": {
        "width": 100 * vw,
        "height": "100%"
    },
    "imageSection": {
        "width": "80%",
        "height": "auto",
        "boxShadow": "0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12)"
    },
    "longImage": {
        "height": 58,
        "width": "auto"
    },
    "mdl-layout__drawer mdl-navigation mdl-navigation__link": {
        "color": "#757575",
        "fontWeight": "700",
        "fontSize": 14
    },
    "mdl-button:hover": {
        "backgroundColor": "#FF6E40"
    },
    "mdl-button:active": {
        "backgroundColor": "#FF6E40"
    },
    "mdl-button:visited": {
        "backgroundColor": "#FF6E40"
    },
    "home2": {
        "marginRight": 10,
        "fontFamily": "'Material Icons'",
        "fontWeight": "normal",
        "fontStyle": "normal",
        "fontSize": "24px !important",
        "lineHeight": 1,
        "letterSpacing": "normal",
        "textTransform": "none",
        "display": "inline-block",
        "whiteSpace": "nowrap",
        "wordWrap": "normal",
        "direction": "ltr",
        "WebkitFontFeatureSettings": "'liga'",
        "WebkitFontSmoothing": "antialiased"
    },
    "footerIcons": {
        "fontSize": 16,
        "paddingRight": 6
    },
    "aboutText2": {
        "marginLeft": 17
    },
    "iframe": {
        "width": 100 * vw,
        "height": 500
    },
    "wufoo-z1ityc5t06r140w": {
        "backgroundColor": "black !important"
    },
    "aboutContainer2": {
        "width": "100%",
        "height": "100%",
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center"
    },
    "mdl-button--raisedmdl-button--colored": {
        "color": "rgb(255, 255, 255)",
        "backgroundColor": "#FF6E34"
    },
    "mdl-button": {
        "backgroundColor": "#FF6E34",
        "border": "none",
        "borderRadius": 2,
        "color": "white",
        "position": "relative",
        "height": 36,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "minWidth": 64,
        "paddingTop": 0,
        "paddingRight": 16,
        "paddingBottom": 0,
        "paddingLeft": 16,
        "display": "inline-block",
        "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
        "fontSize": 14,
        "fontWeight": "500",
        "textTransform": "uppercase",
        "letterSpacing": 0,
        "overflow": "hidden",
        "willChange": "box-shadow",
        "transition": "box-shadow .2s cubic-bezier(.4, 0, 1, 1), background-color .2s cubic-bezier(.4, 0, .2, 1), color .2s cubic-bezier(.4, 0, .2, 1)",
        "outline": "none",
        "cursor": "pointer",
        "textDecoration": "none",
        "textAlign": "center",
        "lineHeight": 36,
        "verticalAlign": "middle"
    },
    "headerHighlight": {
        "color": "#FF6E34"
    },
    "mdl-dialog": {
        "border": "none",
        "boxShadow": "0 9px 46px 8px rgba(0, 0, 0, .14), 0 11px 15px -7px rgba(0, 0, 0, .12), 0 24px 38px 3px rgba(0, 0, 0, .2)",
        "width": 528,
        "height": 542,
        "overflow": "scroll",
        "overflowX": "scroll"
    },
    "close": {
        "color": "#FF6E34",
        "opacity": 1
    },
    "close:active": {
        "backgroundColor": "rgba(158, 158, 158, .2)",
        "color": "#FF6E34"
    },
    "close:hover": {
        "backgroundColor": "rgba(158, 158, 158, .2)",
        "color": "#FF6E34"
    },
    "form": {
        "height": 737
    },
    "applyButton": {
        "fontSize": 20,
        "height": 50
    },
    "mdl-layout__drawer mdl-navigation mdl-navigation__link:hover": {
        "backgroundColor": "#e0e0e0",
        "textDecoration": "none",
        "color": "#FF6E34"
    },
    "mdl-layout__drawer mdl-navigation mdl-navigation__link:active": {
        "backgroundColor": "#e0e0e0",
        "textDecoration": "none",
        "color": "#FF6E34"
    },
    "description": {
        "marginLeft": 5
    },
    "buttonWidth": {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center"
    },
    "buttonRow": {
        "maxWidth": 419
    },
    "secondaryButton": {
        "backgroundColor": "#E0E0E0",
        "color": "black"
    },
    "secondaryButton:hover": {
        "backgroundColor": "#F5F5F5",
        "color": "black"
    },
    "secondaryButton:active": {
        "backgroundColor": "#F5F5F5",
        "color": "black"
    },
    "sectionWidth": {
        "maxWidth": "1440px !important"
    },
    "tallImage": {
        "width": 160
    }
});