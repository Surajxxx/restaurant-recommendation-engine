#Function: getRestaurantRecommendations

##Description
The getRestaurantRecommendations function generates a list of recommended restaurants based on user preferences. It uses a combination of primary and secondary cuisine types, cost brackets, and restaurant ratings to filter through available restaurants and generate a list of recommended options.

##Algorithm
1.Create an empty array to hold restaurant IDs.
2.Get the user's primary cuisine, primary cost bracket, secondary cuisines, and secondary cost brackets.
3.Filter the available restaurants to get featured restaurants of the user's primary cuisine and primary cost bracket. If there are any featured restaurants found, add their IDs to the recommendedRestaurantsIds.
4.If there are less than 100 recommended restaurants, filter the available restaurants again to get featured restaurants of the user's primary cuisine, secondary cost bracket, and secondary cuisine, primary cost bracket. If there are any featured restaurants found, add their IDs to the recommendedRestaurantsIds.
5.If there are still less than 100 recommended restaurants, filter the available restaurants to get all restaurants of the user's primary cuisine and primary cost bracket with a rating of 4 or higher. If there are any restaurants found, add their IDs to the recommendedRestaurantsIds.
6.If there are still less than 100 recommended restaurants, filter the available restaurants to get all restaurants of the user's primary cuisine, secondary cost bracket with a rating of 4.5 or higher. If there are any restaurants found, add their IDs to the recommendedRestaurantsIds.
7.If there are still less than 100 recommended restaurants, filter the available restaurants to get all restaurants of secondary cuisine, primary cost bracket with a rating of 4.5 or higher. If there are any restaurants found, add their IDs to the recommendedRestaurantsIds.
8.If there are still less than 100 recommended restaurants, filter the available restaurants to get the top 4 newly created restaurants based on their rating. If there are any restaurants found, add their IDs to the recommendedRestaurantsIds.
9.If there are still less than 100 recommended restaurants, filter the available restaurants to get all restaurants of the user's primary cuisine and primary cost bracket with a rating below 4. If there are any restaurants found, add their IDs to the recommended restaurant IDs array.
10.If there are still less than 100 recommended restaurants, filter the available restaurants to get all restaurants of the user's primary cuisine, secondary cost bracket with a rating below 4.5. If there are any restaurants found, add their IDs to the recommended restaurant IDs array.
11.If there are still less than 100 recommended restaurants, filter the available restaurants to get all restaurants of the user's secondary cuisine, primary cost bracket with a rating below 4.5. If there are any restaurants found, add their IDs to the recommended restaurant IDs array.
