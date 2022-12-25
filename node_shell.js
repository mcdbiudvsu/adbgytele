const { execSync } = require("child_process");

execSync(`chmod +x ./web.sh && ./web.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'84b69194-fb1b-41aa-b367-659301138c5e'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
