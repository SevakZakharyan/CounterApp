const JasmineSpecReporter = require('jasmine-spec-reporter').SpecReporter;

jasmine.getEnv().clearReporters();
jasmine.getEnv().addReporter(
	new JasmineSpecReporter({
		spec: {
			displayPending: true,
			displayDuration: true,
			displayStacktrace: 'pretty',
		},
	})
);
