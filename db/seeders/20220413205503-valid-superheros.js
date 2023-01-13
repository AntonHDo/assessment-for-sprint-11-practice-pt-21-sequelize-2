'use strict';

const { Superhero } = require('../models');

// DON'T SPEND ALL YOUR TIME MAKING REAL SEED DATA!!!
// Try to just spend only 5 minutes to create the seed data for testing
// You do not need to put in real superhero data as values! The data values
// just need to make sense based from the migration and model files.

const validSuperheros = [
  // Your code here
  {
    name: "AAAA",
    alias: "AAAAA",
    affiliation: "Avengers",
    heightCm: 141,
    isMutant: true,
    race: "human",
    universe: "Marvel",
    releaseYear: 2010
  },
  {
    name: "BBBB",
    alias: "BBBBB",
    affiliation: "Avengers",
    heightCm: 141,
    isMutant: true,
    race: "human",
    universe: "Marvel",
    releaseYear: 2011
  },
  {
    name: "CCCC",
    alias: "CCCCC",
    affiliation: "Avengers",
    heightCm: 141,
    isMutant: true,
    race: "human",
    universe: "Marvel",
    releaseYear: 2012
  },
  {
    name: "DDDD",
    alias: "DDDDD",
    affiliation: "Avengers",
    heightCm: 141,
    isMutant: true,
    race: "human",
    universe: "Marvel",
    releaseYear: 2013
  },
  {
    name: "EEEE",
    alias: "EEEEE",
    affiliation: "Avengers",
    heightCm: 141,
    isMutant: true,
    race: "human",
    universe: "Marvel",
    releaseYear: 2014
  }
];

module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await Superhero.bulkCreate(validSuperheros, {
        validate: true,
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  },

  async down(queryInterface, Sequelize) {
    for (let superheroInfo of validSuperheros) {
      try {
        await Superhero.destroy({
          where: superheroInfo
        });
      } catch (err) {
        console.log(err);
        throw err;
      }
    }
  },
  // DO NOT MODIFY BELOW (for testing purposes):
  validSuperheros,
};
