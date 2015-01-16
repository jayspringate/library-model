# library-model
Modeling the budget dynamics of a public library

Jay Springate and Duncan Germain

***Current known bugs:***<br>
--Formatting is off in Firefox, despite a reset.<br>
--Did not have time to point the dropdown library name at the DOM to change the name on the page.<br>

We chose to model the simplified budget dynamics of a public library, taking into account both government funding and private patronage.  Our simulator allows a user to input minimum and maximum projections for both sources of funding (including negative numbers, if e.g. there are unexpected budget cuts or a pledged supporter backs out).  The simulator then calculates possible changes to the balance over the course of a selected number of years.

Future functionality may include alterable initial balance for a given library, as well as a "kill" feature that stops the simulation if the library becomes insolvent.

We spent the first few hours working in conjunction, doing pair programming on both JavaScript and HTML/CSS.  Once we had a clear understanding of the problems, we broke apart to focus on back end (Jay) and front end (Duncan) respectively, checking in regularly to confirm that we were each aware of what the other was doing.

Back-end problems included wrapping our heads around OOJS and ensuring that the proper output was being sent to the proper HTML fields.  The original logic was very simple, but implementing it in code was difficult, especially when it came to making sure that (e.g.) a call on a function was taking the proper input rather than the index of that input.  We ran into lots of NaNs and infinite returns, but in the end (mostly through Jay's efforts), we got code that works, is readable, and is compact and dry.

Front-end problems included creating a table that could intelligently receive input from the JS file, creating resources (e.g. a complete header) that could be re-used across all pages on the site, and ensuring that the pages intelligently referred to one another.  We used a 16-grid model and did our best to implement OOCSS.  Generally speaking, layout concerns were tediously but easily solved; we feel the page was well-constructed with only a few ugly newbie hacks (e.g. negative margins on a caption to put it in the right place).

Overall, the project feels like an egg ... it doesn't do anything real-world useful, but it's definitely the seed of a genuinely useful application.  If we were to spend another month on both front- and back-end, we feel we could produce a real tool in this domain.


![Domain model](http://i.imgur.com/SSzLNNh.png) 
