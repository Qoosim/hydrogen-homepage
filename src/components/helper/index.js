// export const shorten = (str) => `${str.slice(0, 24)}...`
export const shorten = (str, wordLimit = 24) => {
    const words = str.split(' ');
    if (words.length <= wordLimit) {
      return str;
    }
    return `${words.slice(0, wordLimit).join(' ')}...`;
  };
  