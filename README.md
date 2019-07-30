 ## Questions

 ### Assuming the Star Wars API was slow, what are some optimizations that could be implemented to improve the user experience?
  I faced this problem when I found out that the API did not have a full call therefore whenever loading films, it would take a long time to load. To get around this, I implemented in a way where it will render new data whenever it recieves it. A lazy loader (pagination, load spinners would all work too) on the sections that required additional api calls would make the expereince much better instead but it  would required the user to wait to see the data which may not be good user experience. A solution is caching the data or storing it in a database since the data for this wouldn't change very often. Have a script make api calls at a set interval to keep the data in cache or database up to date.
  
 ### Any improvements you would make to your application?
 
 I would make a pull request to the repo so users can make full api calls. This would reduce a lot of the problems that I have. I think having better navigation would help the user (example: back button). Something interesting would to make a more comprehensive search function that searches for everything instead of films.
 
 