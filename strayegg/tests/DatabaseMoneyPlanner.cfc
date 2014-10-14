component {
	
	function init(
		required string datasource
	) {
		variables.datasource = arguments.datasource;
		variables.q = new Query( datasource = variables.datasource );

		variables.tables = [
			'activities'
		];

		return this;
	}

	function getQuery() {
		return variables.q;
	}

	function create() {
		destroy();
		q.execute(sql='
			CREATE TABLE activities (
				activityID INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
				PRIMARY KEY (activityID)
			) ENGINE=InnoDB DEFAULT 
			CHARSET=utf8 
			COLLATE=utf8_general_ci
		');
	}

	function reset() {
		for (var t in variables.tables) {
			q.execute(sql='TRUNCATE '&t);
		}

		q.execute(sql="
			INSERT INTO activities (
				activityID,
			) VALUES
			(	1	),
			(	2	),
			(	3	)
		");

	}


	function destroy() {
		for (var t in variables.tables) {
			q.execute(sql='DROP TABLE IF EXISTS '&t);
		}

	}

}