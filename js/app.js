angular.module('starter', ['ionic','starter.controllers','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    } 
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

    .state('app.basic', {
    url: '/basic',
    views: {
      'menuContent': {
        templateUrl: 'templates/basic.html'
      }
    }
  })

    .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html'
      }
    }
  })

    .state('app.css', {
    url: '/css',
    views: {
      'menuContent': {
        templateUrl: 'templates/css.html'
      }
    }
  })

    .state('app.javascript', {
    url: '/javascript',
    views: {
      'menuContent': {
        templateUrl: 'templates/javascript.html'
      }
    }
  })

    .state('app.advance', {
    url: '/advance',
    views: {
      'menuContent': {
        templateUrl: 'templates/advance.html'
      }
    }
  })
  
    .state('app.contact', {
    url: '/contact',
    views: {
      'menuContent': {
        templateUrl: 'templates/contact.html'
      }
    }
  })

    .state('app.basics', {
    url: '/basics',
    views: {
      'menuContent': {
        templateUrl: 'templates/iobasic/basics.html'
      }
    }
  })

   .state('app.overview', {
    url: '/overview',
    views: {
      'menuContent': {
        templateUrl: 'templates/iobasic/overview.html'
      }
    }
  })

   .state('app.environment', {
    url: '/environment',
    views: {
      'menuContent': {
        templateUrl: 'templates/iobasic/environment.html'
      }
    }
  })

   .state('app.color', {
    url: '/color',
    views: {
      'menuContent': {
        templateUrl: 'templates/css/color.html'
      }
    }
  })

   .state('app.header', {
    url: '/header',
    views: {
      'menuContent': {
        templateUrl: 'templates/css/header.html'
      }
    }
  })

   .state('app.content', {
    url: '/content',
    views: {
      'menuContent': {
        templateUrl: 'templates/css/content.html'
      }
    }
  })
 
   .state('app.footer', {
    url: '/footer',
    views: {
      'menuContent': {
        templateUrl: 'templates/css/footer.html'
      }
    }
  })

   .state('app.buttons', {
    url: '/buttons',
    views: {
      'menuContent': {
        templateUrl: 'templates/css/buttons.html'
      }
    }
  })

   .state('app.lists', {
    url: '/lists',
    views: {
      'menuContent': {
        templateUrl: 'templates/css/lists.html'
      }
    }
  })

   .state('app.cards', {
    url: '/cards',
    views: {
      'menuContent': {
        templateUrl: 'templates/css/cards.html'
      }
    }
  })

   .state('app.forms', {
    url: '/forms',
    views: {
      'menuContent': {
        templateUrl: 'templates/css/forms.html'
      }
    }
  })
 
   .state('app.toggle', {
    url: '/toggle',
    views: {
      'menuContent': {
        templateUrl: 'templates/css/toggle.html'
      }
    }
  })

   .state('app.checkbox', {
    url: '/checkbox',
    views: {
      'menuContent': {
        templateUrl: 'templates/css/checkbox.html'
      }
    }
  })

   .state('app.readiobutton', {
    url: '/readiobutton',
    views: {
      'menuContent': {
        templateUrl: 'templates/css/readiobutton.html'
      }
    }
  })

   .state('app.range', {
    url: '/range',
    views: {
      'menuContent': {
        templateUrl: 'templates/css/range.html'
      }
    }
  })

   .state('app.select', {
    url: '/select',
    views: {
      'menuContent': {
        templateUrl: 'templates/css/select.html'
      }
    }
  })

   .state('app.tabs', {
    url: '/tabs',
    views: {
      'menuContent': {
        templateUrl: 'templates/css/tabs.html'
      }
    }
  })

   .state('app.grid', {
    url: '/grid',
    views: {
      'menuContent': {
        templateUrl: 'templates/css/grid.html'
      }
    }
  })

   .state('app.icons', {
    url: '/icons',
    views: {
      'menuContent': {
        templateUrl: 'templates/css/icons.html'
      }
    }
  })

   .state('app.padding', {
    url: '/padding',
    views: {
      'menuContent': {
        templateUrl: 'templates/css/padding.html'
      }
    }
  })

   .state('app.actionSheet', {
    url: '/actionSheet',
    views: {
      'menuContent': {
        templateUrl: 'templates/js/actionSheet.html'
      }
    }
  })

  .state('app.backdrop', {
    url: '/backdrop',
    views: {
      'menuContent': {
        templateUrl: 'templates/js/backdrop.html'
      }
    }
  })

  .state('app.content2', {
    url: '/content2',
    views: {
      'menuContent': {
        templateUrl: 'templates/js/content2.html'
      }
    }
  })
  
  .state('app.events', {
    url: '/events',
    views: {
      'menuContent': {
        templateUrl: 'templates/js/events.html'
      }
    }
  })
  
  .state('app.forms2', {
    url: '/forms2',
    views: {
      'menuContent': {
        templateUrl: 'templates/js/forms2.html'
      }
    }
  })

  .state('app.header2', {
    url: '/header2',
    views: {
      'menuContent': {
        templateUrl: 'templates/js/header2.html'
      }
    }
  })

  .state('app.footer2', {
    url: '/footer2',
    views: {
      'menuContent': {
        templateUrl: 'templates/js/footer2.html'
      }
    }
  })

  .state('app.keyboard', {
    url: '/keyboard',
    views: {
      'menuContent': {
        templateUrl: 'templates/js/keyboard.html'
      }
    }
  })

  .state('app.list', {
    url: '/list',
    views: {
      'menuContent': {
        templateUrl: 'templates/js/list.html'
      }
    }
  })

  .state('app.loading', {
    url: '/loading',
    views: {
      'menuContent': {
        templateUrl: 'templates/js/loading.html'
      }
    }
  })

  .state('app.modal', {
    url: '/modal',
    views: {
      'menuContent': {
        templateUrl: 'templates/js/modal.html'
      }
    }
  })

  .state('app.navigation', {
    url: '/navigation',
    views: {
      'menuContent': {
        templateUrl: 'templates/js/navigation.html'
      }
    }
  })

  .state('app.popover', {
    url: '/popover',
    views: {
      'menuContent': {
        templateUrl: 'templates/js/popover.html'
      }
    }
  })

  .state('app.popup', {
    url: '/popup',
    views: {
      'menuContent': {
        templateUrl: 'templates/js/popup.html'
      }
    }
  })

  .state('app.scroll', {
    url: '/scroll',
    views: {
      'menuContent': {
        templateUrl: 'templates/js/scroll.html'
      }
    }
  })

  .state('app.sidemenu', {
    url: '/sidemenu',
    views: {
      'menuContent': {
        templateUrl: 'templates/js/sidemenu.html'
      }
    }
  })

  .state('app.slidebox', {
    url: '/slidebox',
    views: {
      'menuContent': {
        templateUrl: 'templates/js/slidebox.html'
      }
    }
  })

  .state('app.tabsjs', {
    url: '/tabsjs',
    views: {
      'menuContent': {
        templateUrl: 'templates/js/tabsjs.html'
      }
    }
  })

  .state('app.cordovaIntegration', {
    url: '/cordovaIntegration',
    views: {
      'menuContent': {
        templateUrl: 'templates/advance/cordovaIntegration.html'
      }
    }
  })

  .state('app.Admob', {
    url: '/Admob',
    views: {
      'menuContent': {
        templateUrl: 'templates/advance/Admob.html'
      }
    }
  })

  .state('app.camera', {
    url: '/camera',
    views: {
      'menuContent': {
        templateUrl: 'templates/advance/camera.html'
      }
    }
  })

  .state('app.facebook', {
    url: '/facebook',
    views: {
      'menuContent': {
        templateUrl: 'templates/advance/facebook.html'
      }
    }
  })

  .state('app.InappBrowser', {
    url: '/InappBrowser',
    views: {
      'menuContent': {
        templateUrl: 'templates/advance/InappBrowser.html'
      }
    }
  })
 
  .state('app.nativeAudio', {
    url: '/nativeAudio',
    views: {
      'menuContent': {
        templateUrl: 'templates/advance/nativeAudio.html'
      }
    }
  })

  .state('app.geologication', {
    url: '/geologication',
    views: {
      'menuContent': {
        templateUrl: 'templates/advance/geologication.html'
      }
    }
  })

  .state('app.media', {
    url: '/media',
    views: {
      'menuContent': {
        templateUrl: 'templates/advance/media.html'
      }
    }
  })

  .state('app.splashscreen', {
    url: '/splashscreen',
    views: {
      'menuContent': {
        templateUrl: 'templates/advance/splashscreen.html'
      }
    }
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })

    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  $urlRouterProvider.otherwise('/app/home');
});

angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
	$scope.create = function() {
		$state.go('app.home'); 
	};
});