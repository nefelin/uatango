type ClassnameFragment = string | undefined | boolean | null;
const classes = (...frags: Array<ClassnameFragment>) =>
  frags.filter((frag) => typeof frag === "string").join(" ");

export default classes;
