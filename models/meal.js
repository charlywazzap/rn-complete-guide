export class Meal {
  constructor(
    id,
    categoriesIds,
    title,
    affordability,
    complexity,
    imageUrl,
    duration,
    ingredients,
    steps,
    isGlutenFree,
    isVegan,
    isVegetarian,
    isLactoseFree
  ) {
    this.id = id;
    this.categoriesIds = categoriesIds;
    this.title = title;
    this.affordability = affordability;
    this.complexity = complexity;
    this.imageUrl = imageUrl;
    this.duration = duration;
    this.ingredients = ingredients;
    this.steps = steps;
    this.isVegan = isVegan;
    this.isGlutenFree = isGlutenFree;
    this.isVegetarian = isVegetarian;
    this.isLactoseFree = isLactoseFree;
  }
}
