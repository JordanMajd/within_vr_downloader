(function() {
  'use strict';

  angular.module('WithinDownloader', []);

}());

(function() {
  'use strict';

  angular.module('WithinDownloader')
    .controller('WithinController', ['$window', 'WithinService', MainController]);

  function MainController($window, WithinService) {

    var vm = this;

    vm.videoData = [];

    vm.settings = {
      resolutions: ['640x320', '1280x640', '1920x960', '2880x1440', '4096x2048L', '4096x2048H'],
      projections: ['stereo', 'mono'],
      fileTypes: ['mp4', 'webm']
    };

    vm.selectedSettings = {
      resolution: "",
      projection: "",
      fileType: "",
      downloadAudio: "true"
    };

    vm.getImagePath = getImagePath;
    vm.getVideoPath = getVideoPath;
    vm.getAudioPaths = getAudioPaths;
    vm.downloadFiles = downloadFiles;

    init();

    function init() {
      WithinService.getWithinMetadata().then(function(_videoData) {
        vm.videoData = _videoData;
      });
    }

    function getVideoPath(video) {

      return "http://player.with.in/" + video.root + "video/" + video.cameras.default.webplayer.name + "-WEBPLAYER_PROGRESSIVE-" + vm.selectedSettings.projection + "-" + vm.selectedSettings.resolution + "." + vm.selectedSettings.fileType;
    }

    function getImagePath(video) {
      return "http://with.in/images/projects/" + video.root.slice(0, -1) + ".jpg";
    }

    function getAudioPaths(video) {

    }

    function downloadFiles(video) {

      if (vm.selectedSettings.fileType !== "" && vm.selectedSettings.resolution !== "" && vm.selectedSettings.projection !== "") {

        vm.error = "";
        var videoPath = getVideoPath(video);
        $window.open(videoPath, "Download");

        if (vm.selectedSettings.downloadAudio === "true") {

        }
      } else {
        vm.error = "Please select file type, resolution and projection";
      }

    }

  }
}());

(function() {
  'use strict';

  angular.module('WithinDownloader')
    .service('WithinService', ['$http', WithinService]);

  function WithinService($http) {

    var self = this;

    self.getWithinMetadata = getWithinMetadata;

    return self;

    function getWithinMetadata() {

      return $http.get("./res/unified.json").then(function(data) {

        var content = data.data.content;
        var videoData = [];

        for (var key in content) {
          if (content.hasOwnProperty(key)) {

            var video = content[key];

            if (video.visible_on.webplayer === true) {
              videoData.push(video);
            }
          }
        }

        return videoData;
      });
    }
  }
}());

