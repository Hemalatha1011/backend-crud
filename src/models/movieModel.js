import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  movieName: {
    type: String,
  },
  rating: {
    type: Number,
  },
  cast: {
    type: Array,
  },
  genre: {
    type: String,
  },
  releaseDate: {
    type: Date,
  },
});
const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
