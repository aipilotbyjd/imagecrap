import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {},
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: SIZES.small,
  },
  headerTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.primary,
  },
  headerBtn: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.gray,
  },
  cardsContainer: {
    marginTop: SIZES.medium,
    gap: SIZES.small,
  },
  text: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.gray,
  },
  textprompt: {
    fontSize: SIZES.xxcustom,
    fontFamily: FONT.xxcustom,
    color: COLORS.gray,
    marginTop: SIZES.small,
    marginStart: SIZES.small,
  },
  textcontainer: {
    marginTop: SIZES.small,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginEnd: SIZES.small,
    marginStart: SIZES.small,
  },
  textareacontainer: {
    marginTop: SIZES.small,
    flexDirection: "column",
    marginEnd: SIZES.small,
    marginStart: SIZES.small,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    borderWidth: 1,
  },
  textarea: {
    width: "100%",
    height: 50,
    fontSize: SIZES.xmediam,
    fontFamily: FONT.medium,
    color: COLORS.gray,
    paddingLeft: SIZES.small,
  },
  // textareabigger: {
  //   width: "100%",
  //   height: 120,
  //   fontSize: SIZES.xmediam,
  //   fontFamily: FONT.medium,
  //   color: COLORS.gray,
  //   paddingLeft: SIZES.small,
  // },
  textareatext: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.gray,
  },
  textarealength: {
    fontSize: SIZES.small,
    fontFamily: FONT.medium,
    color: COLORS.gray2,
  },
  textarealength2: {
    fontSize: SIZES.small,
    fontFamily: FONT.medium,
    color: COLORS.red,
  },
  textareamain: {
    marginTop: SIZES.small,
    marginEnd: SIZES.small,
    marginStart: SIZES.small,
  },
  historyicon: {
    width: 15,
    height: 15,
  },
  crossicon: {
    width: 10,
    height: 10,
  },
  textareaicons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginEnd: SIZES.small,
    marginStart: SIZES.small,
    marginBottom: SIZES.xSmall,
  },
  submitbutton: {
    marginTop: SIZES.small,
    marginEnd: SIZES.small,
    marginStart: SIZES.small,
    marginBottom: SIZES.small,
  },
  submitbuttonbase: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    height: 70,
    alignItems: "center",
    paddingStart: SIZES.small,
    paddingEnd: SIZES.small,
  },
  submitbuttontext: {
    fontSize: SIZES.xmediam,
    fontFamily: FONT.medium,
    color: COLORS.white,
  },
  submitbuttontext2: {
    fontSize: SIZES.xmediam,
    fontFamily: FONT.medium,
    color: COLORS.gray,
  },
  submitbuttonicon: {
    width: 25,
    height: 25,
    marginStart: SIZES.xSmall,
  },
  submitbuttontexts: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
