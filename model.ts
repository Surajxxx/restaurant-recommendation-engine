export enum Cuisine {
  SouthIndian = "SouthIndian",
  NorthIndian = "NorthIndian",
  Chinese = "Chinese",
}

export class Restaurant {
  private restaurantId: string;
  private cuisine: Cuisine;
  private costBracket: number;
  private rating: number;
  private isRecommended: boolean;
  private onBoardedTime: Date;

  constructor(
    restaurantId: string,
    cuisine: Cuisine,
    costBracket: number,
    rating: number,
    isRecommended: boolean,
    onBoardedTime: Date
  ) {
    this.restaurantId = restaurantId;
    this.cuisine = cuisine;
    this.costBracket = costBracket;
    this.rating = rating;
    this.isRecommended = isRecommended;
    this.onBoardedTime = onBoardedTime;
  }

  // Getters
  public getRestaurantId() {
    return this.restaurantId;
  }

  public getCuisine() {
    return this.cuisine;
  }

  public getCostBracket() {
    return this.costBracket;
  }

  public getRating() {
    return this.rating;
  }

  public getIsRecommended() {
    return this.isRecommended;
  }

  public getOnBoardedTime() {
    return this.onBoardedTime;
  }

  // Setters
  public setRestaurantId(restaurantId: string) {
    this.restaurantId = restaurantId;
  }

  public setCuisine(cuisine: Cuisine) {
    this.cuisine = cuisine;
  }

  public setCostBracket(costBracket: number) {
    this.costBracket = costBracket;
  }

  public setRating(rating: number) {
    this.rating = rating;
  }

  public setIsRecommended(isRecommended: boolean) {
    this.isRecommended = isRecommended;
  }

  public setOnBoardedTime(onBoardedTime: Date) {
    this.onBoardedTime = onBoardedTime;
  }
}

export class CuisineTracking {
  private type: Cuisine;
  private noOfOrders: number;

  constructor(type: Cuisine, noOfOrders: number) {
    this.type = type;
    this.noOfOrders = noOfOrders;
  }
  // Getters
  public getType() {
    return this.type;
  }

  public getNoOfOrders() {
    return this.noOfOrders;
  }

  // Setters
  public setType(type: Cuisine) {
    this.type = type;
  }

  public setNoOfOrders(noOfOrders: number) {
    this.noOfOrders = noOfOrders;
  }
}

export class CostTracking {
  private type: number;
  private noOfOrders: number;

  constructor(type: number, noOfOrders: number) {
    this.type = type;
    this.noOfOrders = noOfOrders;
  }

  // Getters
  public getType() {
    return this.type;
  }

  public getNoOfOrders() {
    return this.noOfOrders;
  }

  // Setters
  public setType(type: number) {
    this.type = type;
  }

  public setNoOfOrders(noOfOrders: number) {
    this.noOfOrders = noOfOrders;
  }
}

export class User {
  private cuisines: CuisineTracking[];
  private costBracket: CostTracking[];

  constructor(cuisines: CuisineTracking[], costBracket: CostTracking[]) {
    this.cuisines = cuisines;
    this.costBracket = costBracket;
  }
  // Getters
  public getCuisines(): CuisineTracking[] {
    return this.cuisines;
  }

  public getPrimaryCuisine() : Cuisine {
    return this.getCuisines()[0].getType();
  }

  public getSecondaryCuisines() : Cuisine[] {
    return [this.getCuisines()[1].getType(), this.getCuisines()[2].getType()];
  }

  public getCostBracket(): CostTracking[] {
    return this.costBracket;
  }

  public getPrimaryCostBracket(): number {
    return this.getCostBracket()[0].getType();
  }

  public getSecondaryCostBrackets(): number[] {
    return [this.getCostBracket()[1].getType(), this.getCostBracket()[2].getType()];
  }

  // Setters
  public setCuisines(cuisines: CuisineTracking[]): void {
    this.cuisines = cuisines;
  }

  public setCostBracket(costBracket: CostTracking[]): void {
    this.costBracket = costBracket;
  }
}
