Meteor.startup(function () {
    if (Enrollments.find().count() === 0) {

        var enrollments = [
            {'first_name': 'Justin'},
            {'first_name': 'Tom'},
            {'first_name': 'Taylor'},
        ];

        for (var i = 0; i < enrollments.length; i++)
            Enrollments.insert(enrollments[i]);
    }
});
