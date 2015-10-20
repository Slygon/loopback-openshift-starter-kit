var debug = function(str) {
	console.log(str);
}

module.exports = function (app) {
	app.models.User.settings.acls = require('../user-acls.json'); 
	
	var User = app.models.User,
		Role = app.models.Role,
		RoleMapping = app.models.RoleMapping;
	
	User.create([
		{ username: 'admin', email: 'a@a.com', password: '123456' }
	], function (err, users) {
		if (err) return debug(err);
    
		// Create projects, assign project owners and project team members
    
		// Create the admin role
		Role.create({
			name: 'admin'
		}, function (err, role) {
			if (err) return debug(err);
			debug(role);
 
			// Make Bob an admin
			role.principals.create({
				principalType: RoleMapping.USER,
				principalId: users[0].id
			}, function (err, principal) {
				if (err) return debug(err);
				debug(principal);
			});
		});
	});
}