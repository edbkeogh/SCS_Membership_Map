
L.Marker.include({
	clusterHide: function () {
		var backup = this.options.opacity;
		this.setOpacity(0);
		this.options.opacity = backup;
		return this;
	},

	clusterShow: function () {
		return this.setOpacity(this.options.opacity);
	}
});
