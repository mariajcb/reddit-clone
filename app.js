var app = angular.module('goodDog', ['ngAnimate']);

app.controller('DogController', function($scope) {

    $scope.view = {};
    $scope.view.posts = [{
        title: "Pup in a Cup",
        author: "Bruiser W. Chihuahua",
        image: "https://static.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317-medium.jpeg",
        description: "Get a load of that dog!",
        date: new Date('December 17, 2016 03:24:00'),
        dateMoment: moment().subtract(1, 'days').calendar(),
        votes: 4,
        comments: [{
            author: "Balto",
            text: "How would this dog even survive in the wild?"
        }, {
            author: "Willow Corgington the Marquess of Bath",
            text: "Cups are for tea. This is highly improper!"
        }],
    }, {
        title: "A+ Yawning",
        author: "Buddy Clinton",
        image: "https://static.pexels.com/photos/13869/a97c4a1614b53d6f55ae2464b06ba6aa-medium.jpg",
        description: "Get a load of that dog!",
        date: new Date('December 27, 2016 03:24:00'),
        dateMoment: moment().subtract(1, 'days').calendar(),
        votes: 2,
        comments: []
    }, {
        title: "MAJESTIC",
        author: "Willow Corgington the Marquess of Bath",
        image: "https://static.pexels.com/photos/164186/pexels-photo-164186-medium.jpeg",
        description: "Get a load of that dog!",
        date: new Date('December 21, 2016 03:24:00'),
        dateMoment: moment().subtract(1, 'days').calendar(),
        votes: 3,
        comments: []
    }, {
        title: "O_O",
        author: "Balto",
        image: "https://static.pexels.com/photos/60254/pexels-photo-60254-medium.jpeg",
        description: "Get a load of that dog!",
        date: new Date('December 7, 2016 03:24:00'),
        dateMoment: moment().subtract(1, 'days').calendar(),
        votes: -1,
        comments: []
    }]

    $scope.createPost = function(post, newPost) {
        event.preventDefault()
        if (post) {
            post.comments = []
            post.dateMoment = moment().calendar()
            post.votes = 0
            $scope.view.posts.push($scope.view.post)
            $scope.post = ''
            $scope.newPost.$setPristine()
        }
    }

    //VOTES
    $scope.plusOne = function(post) {
        post.votes += 1
    }

    $scope.minusOne = function(post) {
        post.votes -= 1
    }

    $scope.votes = function(post) {
        if (post.votes > 0) {
            return 'positive';
        } else if (post.votes < 0) {
            return 'negative';
        } else {
            return 'neutral';
        }
    }

    //COMMENTS
    $scope.newComment = {};

    $scope.newComment = function(post, comment, index, newComment) {
        event.preventDefault()
        if (comment) {
            post.comments.push(comment)
            $scope.comment[index] = null
            newComment.$setPristine()
        }
    }

    //SORTING
    $scope.view.sort = ""

    //SEARCH
    $scope.view.search = ""
})
