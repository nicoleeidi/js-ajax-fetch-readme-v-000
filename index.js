const app = "I don't do much.";

  const token =  '04ae7bc8f20238e70725123a0916a5951ab1bfe0'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
