import Movie from "../models/movieModel.js"
import jwt from "jsonwebtoken";


//METHOD -> GET
//PATH -> movies/fetchMovies
export const fetchMovies = async (_, res) => {
  try {
    const movie = await Movie.find({});
    res.status(200).send(movie);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};


//METHOD -> POST
//PATH -> movies/create
export const createMovie = async (req, res) => {
  const { movieName, rating, cast, genre, releaseDate } = req.body;

  const newMovie = new Movie({
    movieName,
    rating,
    cast,
    genre,
    releaseDate,
  });

  try {
    const movie = await newMovie.save();
    res.status(201).send(movie);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};


//METHOD -> GET
//PATH -> movies/accessToken
//ACCESS -> PUBLIC
export const getJwtToken = (_, res) => {
  try {
    const token = jwt.sign({ data: "token" }, process.env.JWTSECRETKEY, {
      expiresIn: "1h",
    });
    res.status(200).send(token);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

//METHOD -> PUT
//PATH -> movies/update
//ACCESS -> PRIVATE
//UPDATE USING MOVIE NAME
export const updateMovie = async (req, res) => {
  const { movieName, rating, cast, genre, releaseDate } = req.body;
  try {
    const movie = await Movie.findOne({ movieName });
    if (!movie) {
      res.status(400).send("movie name doesn't exist");
      return;
    }
    else{
      await Movie.updateOne(movie,{ movieName,
        rating,
        cast,
        genre,
        releaseDate, });
      res.status(201).send("updated SuccessFully");
    }
    
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

//METHOD -> DELETE
//PATH -> movies/delete
//ACCESS -> PRIVATE
//DELETE USING MOVIE NAME
export const deleteMovie = async (req, res) => {
  const { movieName } = req.query;
  try {
    const movie = await Movie.findOne({ movieName });
    if (!movie) {
      res.status(400).send("movie name doesn't exist");
      return;
    }
    await Movie.deleteOne({ movieName });
    res.status(204).send("Delete SuccessFully");
  } catch (error) {
    console.log(error)
    res.status(500).send("Internal Server Error" );
  }
};


