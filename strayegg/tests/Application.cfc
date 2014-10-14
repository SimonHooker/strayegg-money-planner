component output='true' {
	this.Name = 'STRAYEGG-'&Hash(cgi.server_name)&'-TESTBOX';
	this.ApplicationTimeout = CreateTimeSpan(1,1,0,0); 
	this.timeout=86400;	// 24h timeout, as the console exists to allow earlier timeout
}