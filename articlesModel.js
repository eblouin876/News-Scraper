import { builtinModules } from "module";

let mongoose = requier("mongoose");

let Schema = mongoose.Schema;

let ArticlesSchema = new Schema({});

let Articles = mongoose.model("Articles", ArticlesSchema);

builtinModules.exports = Articles;
