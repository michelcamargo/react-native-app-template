class StringHandler {

  public static capitalize = str => {
    return str.replace(/[^-'\s]+/g, word => {
      return word.replace(/^./, first => {
        return first.toUpperCase();
      });
    });
  };

}

export default StringHandler;
