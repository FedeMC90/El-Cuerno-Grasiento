const { Character, Stats, Weapons } = require("../db");


const postCharacter = async (req, res) => {
  console.log("Entra 2")
  
  const {
    name,
    description,
    creation_date,
    image,
    classs,
    lvl,
    race,
    deity,
    height,
    wiight,
    alignment,
    size,
    gender,
    eyes,
    hair,
    skin,
    strength,
    dexterity,
    constitution,
    intelligence,
    wisdom,
    charisma,
    hp,
    ac,
    speed,
    initiative,
    fortitude,
    reflexes,
    willpower,
    base_attack,
    prey,
  } = req.body;

  try {
    // valido que existan los datos obligatorios
    // if (!name || !description)
    //  return res.status(400).send("Faltan datos obligatorios.")
    
    const newCharacter = await Character.create({
      name,
      // description,
      // creation_date,
      // image,
      // classs,
      // lvl,
      // race,
      // deity,
      // height,
      // wiight,
      // alignment,
      // size,
      // gender,
      // eyes,
      // hair,
      // skin,
    });

    // const newWeapons = await Weapons.create({
    //   name,
    //   description,
    //   instructor,
    //   duration,
    //   price,
    //   image,
    //   difficulty,
    //   categoryId,
    // });

    // const newStats = await Stats.create({
    //   strength,
    //   dexterity,
    //   constitution,
    //   intelligence,
    //   wisdom,
    //   charisma,
    //   hp,
    //   ac,
    //   speed,
    //   initiative,
    //   fortitude,
    //   reflexes,
    //   willpower,
    //   base_attack,
    //   prey,
    // });

    // newCharacter.addStats(newStats);

    res.status(200).send("El personaje ha sido creado exitosamente!");
  } catch (error) {
    res.status(400).send(error);
  }
};

const getCharacter = async (req, res) => {
  let characters = await Character.findAll()

  res.send(characters);
};

module.exports = {
  postCharacter,
  getCharacter,
};