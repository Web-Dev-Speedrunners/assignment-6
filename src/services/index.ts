import axios from "axios";

export enum AnimalType {
  Cat,
  Dog,
}

const links: Record<string, string> = {
  catFact:
    "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1",
  dogFact:
    "https://yb7pkbnkv5.execute-api.us-east-1.amazonaws.com/prod/dogfact",
  catImage: "https://random.dog/woof.json",
  dogImage: "https://aws.random.cat/meow",
};

export const FindFact = async (_animal?: AnimalType): Promise<string> => {
  let res: string;
  /* 
    variable animal checks to see if there was a specific animal type wanted, 
    if not, it randomly selects one
  */
  const animal: AnimalType =
    _animal === undefined ? Math.floor(Math.random() * 2) : _animal;

  if (animal === AnimalType.Dog) {
    const dogFact = await axios.get(links.dogFact);
    res = dogFact.data.fact;
  } else {
    const catfact = await axios.get(links.catFact);
    res = catfact.data.text;
  }

  return res;
};

export const FindImage = async (_animal?: AnimalType): Promise<string> => {
  let res: string;
  const animal: AnimalType =
    _animal === undefined ? Math.floor(Math.random() * 2) : _animal;

  if (animal === AnimalType.Dog) {
    const dogFact = await axios.get(links.dogImage);
    res = dogFact.data.file;
  } else {
    const catfact = await axios.get(links.catImage);
    res = catfact.data.url;
  }

  return res;
};
