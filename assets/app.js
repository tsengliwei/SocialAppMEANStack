angular.module("app",[]),angular.module("app").controller("PostsCtrl",["$scope","PostsSvc",function(t,s){t.addPost=function(){t.postBody&&s.create({username:"dickeyxxx",body:t.postBody}).success(function(s){t.posts.unshift(s),t.postBody=null})},s.fetch().success(function(s){t.posts=s})}]),angular.module("app").service("PostsSvc",["$http",function(t){this.fetch=function(){return t.get("/api/posts")},this.create=function(s){return t.post("/api/posts",s)}}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyIsInBvc3RzLmN0cmwuanMiLCJwb3N0cy5zdmMuanMiXSwibmFtZXMiOlsiYW5ndWxhciIsIm1vZHVsZSIsImNvbnRyb2xsZXIiLCIkc2NvcGUiLCJQb3N0c1N2YyIsImFkZFBvc3QiLCJwb3N0Qm9keSIsImNyZWF0ZSIsInVzZXJuYW1lIiwiYm9keSIsInN1Y2Nlc3MiLCJwb3N0IiwicG9zdHMiLCJ1bnNoaWZ0IiwiZmV0Y2giLCJzZXJ2aWNlIiwiJGh0dHAiLCJ0aGlzIiwiZ2V0Il0sIm1hcHBpbmdzIjoiQUFBQUEsUUFBQUMsT0FBQSxVQ0FBRCxRQUFBQyxPQUFBLE9BQ0FDLFdBQUEsYUFBQSxTQUFBLFdBQUEsU0FBQUMsRUFBQUMsR0FDQUQsRUFBQUUsUUFBQSxXQUNBRixFQUFBRyxVQUNBRixFQUFBRyxRQUNBQyxTQUFBLFlBQ0FDLEtBQUFOLEVBQUFHLFdBQ0FJLFFBQUEsU0FBQUMsR0FDQVIsRUFBQVMsTUFBQUMsUUFBQUYsR0FDQVIsRUFBQUcsU0FBQSxRQUtBRixFQUFBVSxRQUFBSixRQUFBLFNBQUFFLEdBQ0FULEVBQUFTLE1BQUFBLE9DZkFaLFFBQUFDLE9BQUEsT0FDQWMsUUFBQSxZQUFBLFFBQUEsU0FBQUMsR0FDQUMsS0FBQUgsTUFBQSxXQUNBLE1BQUFFLEdBQUFFLElBQUEsZUFFQUQsS0FBQVYsT0FBQSxTQUFBSSxHQUNBLE1BQUFLLEdBQUFMLEtBQUEsYUFBQUEiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFtdKSIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuLmNvbnRyb2xsZXIoJ1Bvc3RzQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgUG9zdHNTdmMpe1xuXHQkc2NvcGUuYWRkUG9zdCA9IGZ1bmN0aW9uICgpIHtcblx0XHRpZiAoJHNjb3BlLnBvc3RCb2R5KSB7XG5cdFx0XHRQb3N0c1N2Yy5jcmVhdGUoe1xuXHRcdFx0XHR1c2VybmFtZTogJ2RpY2tleXh4eCcsXG5cdFx0XHRcdGJvZHk6ICRzY29wZS5wb3N0Qm9keVxuXHRcdFx0fSkuc3VjY2VzcyhmdW5jdGlvbihwb3N0KXtcblx0XHRcdFx0JHNjb3BlLnBvc3RzLnVuc2hpZnQocG9zdClcblx0XHRcdFx0JHNjb3BlLnBvc3RCb2R5ID0gbnVsbFxuXHRcdFx0fSlcblx0XHR9XG5cdH1cblxuXHRQb3N0c1N2Yy5mZXRjaCgpLnN1Y2Nlc3MoZnVuY3Rpb24ocG9zdHMpe1xuXHRcdCRzY29wZS5wb3N0cyA9IHBvc3RzXG5cdH0pXG59KSIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuLnNlcnZpY2UoJ1Bvc3RzU3ZjJywgZnVuY3Rpb24oJGh0dHApe1xuXHR0aGlzLmZldGNoID0gZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL3Bvc3RzJylcblx0fVxuXHR0aGlzLmNyZWF0ZSA9IGZ1bmN0aW9uKHBvc3Qpe1xuXHRcdHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL3Bvc3RzJywgcG9zdClcblx0fVxufSkiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=