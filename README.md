# Gif Gallery

Gif Gallery is a website that connects to Giphy to allow users to search for specific or random Gifs and save them to a Gallery

Giphy API: https://developers.giphy.com/docs/api/endpoint/

## How to use:
For the code to work you need to create a local ENV file in the root folder named .env.local which should contain your individual Giphy API-key (Format: REACT_APP_APIKEY=<YOUR_KEY_HERE>).
### Gallery
The start page is the users gallery. From here the user can filter their saved GIFs by typing into the text field as well as choosing to see only GIFs that have trended.
Saved GIFs can be removed by clicking on the respective red 'X'.

### Searcher
The search page can be navigated to by clicking "Search" in the navigation bar. From here the user can either search for GIFs by typing a search phrase via the text field or choose to see a random GIF. 
The user can save GIFs by clicking the respctive 'Save GIF' button.
The user can navigate to the Gallery page by clicking "Gallery" in the navigation bar.


## Why React:
When reasearching frameworks Angular, React and Vue were identified as candidates. When diving deeper we learned that Angular and React are being developed and maintained by big tech players (Google and Facebook) wheras Vue is open source and community driven [1]. With this in mind we decided to focus on Angular and React mainly because being backed by large companies, their support is somewhat guranteed and this further helps the longevity of this project. In combination with the fact that Angular and React both are more popular and widely used than Vue led to us excluding Vue from the list [1]. 



Upon evaluating the remaining two options we considered our project idea which is quite small and lightweight. When reading up more on Angular and React we realised that Angular is an entire structural framework while React is a much smaller library which allows you to build UI components [2][3]. Further reading revealed that Angular is recommended for building larger scaled applications which is the opposite of our project idea. Armed with the knowledge that React is much more lightweight than Angular, has a smaller learning curve and is more suited for smaller projects we finally excluded Angular and were left with our final choice React.

Further cementing our choice of React is the fact that React is based on creating reusable components and since our idea is based around rendering multiple GIF objects this would make it a lot easier since we can simply create a component and reuse it.


[1] - https://academind.com/tutorials/angular-vs-react-vs-vue-my-thoughts/

[2] - https://www.guru99.com/react-vs-angular-key-difference.html#:~:text=KEY%20DIFFERENCE,React%20is%20based%20on%20Javascript.

[3] - https://athemes.com/guides/angular-vs-react-vs-vue/#:~:text=React%20is%20a%20UI%20library,them%20and%20understand%20their%20differences
