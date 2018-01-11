var Notify = function(options) {
	this.hasNotificationSupport = "Notification" in window;
	this.hasNotificationPermission = this.hasNotificationSupport ? Notification.permission === "granted" : false;
	this.hasNotificationPermissionBeenDenied = this.hasNotificationSupport ? Notification.permission !== "denied" : false;

	this.settings = {
		actions: [],
		badge: "http://via.placeholder.com/25x25",
		body: "This is the notification body",
		data: "",
		dir: "ltr",
		icon: "http://via.placeholder.com/75x75",
		image: "http://via.placeholder.com/250x250",
		lang: "EN",
		noscreen: false,
		renotify: false,
		requireInteraction: false,
		silent: false,
		sound: "",
		sticky: false,
		tag: "",
		title: "Hello from NotifyJS",
		vibrate: ""
	};

	// Did we get a title passed in or some options?
	if (typeof options === "string") {
		this.settings.title = options;
	} else {
		if (typeof options !== "undefined") {
			for (var key in settings) {
				this.settings[key] = typeof options[key] !== "undefined" ? options[key] : this.settings[key];
			}
		}
	}

	if (this.hasNotificationSupport && !this.hasNotificationPermission) {
		Notification.requestPermission().then(function(result) {
		  this.hasNotificationPermission = result;
		});
	}

	if (this.hasNotificationSupport && this.hasNotificationPermission) {
		var n = new Notification(this.settings.title, this.settings);
	} else {
		alert(this.settings.title);
	}
};