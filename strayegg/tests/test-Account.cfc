component accessors=true extends='testbox.system.BaseSpec'{


	function beforeAll(){
		variables.db = new DatabaseMoneyPlanner(
			datasource = 'testbox'
		);
		variables.db.create();
	}

	function afterAll(){
		variables.db.destroy();
	}

	function run(){

		describe('Account cfc',function(){
			
			beforeEach(function( currentSpec ){
				db.reset();
				variables.o = new strayegg.moneyplanner.account(datasource = 'testbox');
			});

			afterEach(function( currentSpec ){});


			it('exists',function(){

				expect( o ).typeOf( 'strayegg.moneyplanner.account' );

			});

		});

	}


}