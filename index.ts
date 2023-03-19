import dayjs from 'dayjs';
import { User, Restaurant } from './model';

class RestaurantRecommendations {
  public getRestaurantRecommendations(user : User, availableRestaurants : Restaurant[]) {
    const recommendedRestaurantsIds: string[] = [];
    const primaryCuisine = user.getPrimaryCuisine();
    const primaryCostBracket = user.getPrimaryCostBracket();
    const secondaryCuisines = user.getSecondaryCuisines();
    const secondaryCostBrackets = user.getSecondaryCostBrackets();

    // Featured restaurants of primary cuisine and primary cost bracket
    const primaryFeaturedRestaurants = availableRestaurants.filter((restaurant) => {
      return (
        restaurant.getIsRecommended() === true
        &&
        restaurant.getCuisine() === primaryCuisine
        &&
        restaurant.getCostBracket() === primaryCostBracket
      )
    })

    if(primaryFeaturedRestaurants.length > 0) {
      const restaurantIds = primaryFeaturedRestaurants.map((restaurant) => {
        return restaurant.getRestaurantId() 
      });
      restaurantIds.forEach((restaurantId) =>{
        if(recommendedRestaurantsIds.length < 100){
          recommendedRestaurantsIds.push(restaurantId)
        }
      })
    }

    if(recommendedRestaurantsIds.length < 100){
      // Featured restaurants of primary cuisine, secondary cost bracket and secondary cuisine, primary cost
      const secondaryFeaturedRestaurants = availableRestaurants.filter((restaurant) => {
        return (
          restaurant.getIsRecommended() === true
          &&
          (
          (restaurant.getCuisine() === primaryCuisine && secondaryCostBrackets.includes(restaurant.getCostBracket()))
          ||
          (restaurant.getCostBracket() === primaryCostBracket && secondaryCuisines.includes(restaurant.getCuisine()))
          )
        )
      });

      if(secondaryFeaturedRestaurants.length > 0){
        // getting restaurantIds from restaurants
        const restaurantIds = secondaryFeaturedRestaurants.map((restaurant) => {
          return restaurant.getRestaurantId() 
        });
        // inserting unique restaurantId to recommendedRestaurantsIds array
        restaurantIds.forEach((restaurantId) =>{
          if(recommendedRestaurantsIds.length < 100 && !recommendedRestaurantsIds.includes(restaurantId)){
            recommendedRestaurantsIds.push(restaurantId)
          }
        })
      }

      if(recommendedRestaurantsIds.length < 100){
        // All restaurants of Primary cuisine, primary cost bracket with rating >= 4
        const primaryRestaurantsMin4Star = availableRestaurants.filter((restaurant) => {
          return (
            restaurant.getCuisine() === primaryCuisine
            &&
            restaurant.getCostBracket() === primaryCostBracket
            &&
            restaurant.getRating() >= 4
          )
        });

        if(primaryRestaurantsMin4Star.length > 0){
          const restaurantIds = primaryRestaurantsMin4Star.map((restaurant) => {
            return restaurant.getRestaurantId() 
          });
           // inserting unique restaurantId to recommendedRestaurantsIds array
          restaurantIds.forEach((restaurantId) =>{
            if(recommendedRestaurantsIds.length < 100 && !recommendedRestaurantsIds.includes(restaurantId)){
              recommendedRestaurantsIds.push(restaurantId)
            }
          })
        }

        if(recommendedRestaurantsIds.length < 100){
          // All restaurants of Primary cuisine, secondary cost bracket with rating >= 4.5
          const secondaryCostRestaurantsMin45Star = availableRestaurants.filter((restaurant) => {
            return (
              restaurant.getCuisine() === primaryCuisine
              &&
              secondaryCostBrackets.includes(restaurant.getCostBracket())
              &&
              restaurant.getRating() >= 4.5
            )
          });

          if(secondaryCostRestaurantsMin45Star.length > 0){
            const restaurantIds = secondaryCostRestaurantsMin45Star.map((restaurant) => {
              return restaurant.getRestaurantId() 
            });
             // inserting unique restaurantId to recommendedRestaurantsIds array
            restaurantIds.forEach((restaurantId) =>{
              if(recommendedRestaurantsIds.length < 100 && !recommendedRestaurantsIds.includes(restaurantId)){
                recommendedRestaurantsIds.push(restaurantId)
              }
            })
          }

          if(recommendedRestaurantsIds.length <100){
            // All restaurants of secondary cuisine, primary cost bracket with rating >= 4.5
            const secondaryCuisineRestaurantMin45Star = availableRestaurants.filter((restaurant) => {
              return (
                secondaryCuisines.includes(restaurant.getCuisine())
                &&
                restaurant.getCostBracket() === primaryCostBracket
                &&
                restaurant.getRating() >= 4.5
              )
            });

            if(secondaryCuisineRestaurantMin45Star.length > 0){
              const restaurantIds = secondaryCuisineRestaurantMin45Star.map((restaurant) => {
                return restaurant.getRestaurantId() 
              });
               // inserting unique restaurantId to recommendedRestaurantsIds array
              restaurantIds.forEach((restaurantId) =>{
                if(recommendedRestaurantsIds.length < 100 && !recommendedRestaurantsIds.includes(restaurantId)){
                  recommendedRestaurantsIds.push(restaurantId)
                }
              })
            }

              if(recommendedRestaurantsIds.length < 100){
                // Top 4 newly created restaurants by rating
                const newRestaurants = availableRestaurants.filter((restaurant) => {
                  return (
                    dayjs(new Date(new Date().getTime() - 48 * 60 * 60 * 1000)).isBefore(dayjs(restaurant.getOnBoardedTime()))
                  )
                });

                const topRatedNewRestaurants = newRestaurants.sort((restaurant1, restaurant2) => restaurant2.getRating() - restaurant1.getRating());
              
                const topFourNewRestaurants = topRatedNewRestaurants.slice(0, 4);

                if(topFourNewRestaurants.length > 0){
                  const restaurantIds = topFourNewRestaurants.map((restaurant) => {
                    return restaurant.getRestaurantId() 
                  });
                   // inserting unique restaurantId to recommendedRestaurantsIds array
                  restaurantIds.forEach((restaurantId) =>{
                    if(recommendedRestaurantsIds.length < 100 && !recommendedRestaurantsIds.includes(restaurantId)){
                      recommendedRestaurantsIds.push(restaurantId)
                    }
                  })
                }

                if(recommendedRestaurantsIds.length < 100){
                  // All restaurants of Primary cuisine, primary cost bracket with rating < 4
                  const primaryRestaurantsLessThan4Star = availableRestaurants.filter((restaurant) => {
                    return (
                      restaurant.getCuisine() === primaryCuisine
                      &&
                      restaurant.getCostBracket() === primaryCostBracket
                      &&
                      restaurant.getRating() < 4
                    )
                  });
                  if(primaryRestaurantsLessThan4Star.length > 0){
                    const restaurantIds = primaryRestaurantsLessThan4Star.map((restaurant) => {
                      return restaurant.getRestaurantId() 
                    });
                     // inserting unique restaurantId to recommendedRestaurantsIds array
                    restaurantIds.forEach((restaurantId) =>{
                      if(recommendedRestaurantsIds.length < 100 && !recommendedRestaurantsIds.includes(restaurantId)){
                        recommendedRestaurantsIds.push(restaurantId)
                      }
                    })
                  }
                  if(recommendedRestaurantsIds.length < 100){
                    // All restaurants of Primary cuisine, secondary cost bracket with rating < 4.5
                    const secondaryCostRestaurantsLessThan45Star = availableRestaurants.filter((restaurant) => {
                      return (
                        restaurant.getCuisine() === primaryCuisine
                        &&
                        secondaryCostBrackets.includes(restaurant.getCostBracket())
                        &&
                        restaurant.getRating() < 4.5
                      )
                    });
                    if(secondaryCostRestaurantsLessThan45Star.length > 0){
                      const restaurantIds = secondaryCostRestaurantsLessThan45Star.map((restaurant) => {
                        return restaurant.getRestaurantId() 
                      });
                       // inserting unique restaurantId to recommendedRestaurantsIds array
                      restaurantIds.forEach((restaurantId) =>{
                        if(recommendedRestaurantsIds.length < 100 && !recommendedRestaurantsIds.includes(restaurantId)){
                          recommendedRestaurantsIds.push(restaurantId)
                        }
                      })
                    }

                    if(recommendedRestaurantsIds.length < 100){
                      // All restaurants of secondary cuisine, primary cost bracket with rating < 4.5
                      const secondaryCuisineRestaurantsLessThan45Star = availableRestaurants.filter((restaurant) => {
                        return (
                          secondaryCuisines.includes(restaurant.getCuisine())
                          &&
                          restaurant.getCostBracket() === primaryCostBracket
                          &&
                          restaurant.getRating() < 4.5
                        )
                      });
                      if(secondaryCuisineRestaurantsLessThan45Star.length > 0){
                      const restaurantIds = secondaryCuisineRestaurantsLessThan45Star.map((restaurant) => {
                        return restaurant.getRestaurantId() 
                      });
                       // inserting unique restaurantId to recommendedRestaurantsIds array
                      restaurantIds.forEach((restaurantId) =>{
                        if(recommendedRestaurantsIds.length < 100 && !recommendedRestaurantsIds.includes(restaurantId)){
                          recommendedRestaurantsIds.push(restaurantId)
                        }
                      })
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

