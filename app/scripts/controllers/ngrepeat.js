var Ctrl=angular.module('myApp',[]);

Ctrl.controller('testCtrl',function($scope,$http){
      $scope.click = function (){
            $http.get('question.json').
             success(function(data) {
                $scope.book=data.books;
                
                // Выводит в консоли
                 console.log(data.books);
                  console.log($scope.book.public);
                 // console.log(book.books.text);
                  // console.log($scope.book);
                //   console.log(data.books[0]);
                // console.log(data.question.author);
                //  console.log(data.question);
                 alert('NG repeat');
            });
        };
    });