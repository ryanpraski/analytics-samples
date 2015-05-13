(function ($) {
	window.MarketingCloud = {
		/** Make the api request */
		/* callback should follow standard jQuery request format:
		 *    function callback(data)
		 */
		makeRequest : function (username, secret, method, params, endpoint, callback) {
			var url = 'https://' + endpoint + '/admin/1.4/rest/?method=' + method;
			$.ajax(url, {
				type : 'POST',
				data : params,
				complete : callback,
				dataType : "json",
				async: false,
				timeout: 2000,
				headers : {
					'X-WSSE' : wsseHeader(username,secret)
				}
			});
		}
	};
})(jQuery);