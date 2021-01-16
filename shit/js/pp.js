'use strict'

function prettify(val) {
	const seen = new Set()
	let nesting_level = 0

	function indent() {
		return ''.padEnd(nesting_level * 2, ' ')
	}

	function prettify_string(str) {
		str = str.replace(/\\/g, '\\\\')
		str = str.replace(/[\x00-\x1f\\]/g, (c) => {
			switch (c) {
			case '\\':
				return '\\\\'
			case '\n':
				return '\\n'
			case '\r':
				return '\\r'
			case '\t':
				return '\\t'
			case '\b':
				return '\\b'
			case '\f':
				return '\\f'
			default:
				return '\\x' + c.charCodeAt(0).toString(16).padStart(2, '0')
			}
		})
		str = str.replace(
			/[^\x00-\x7f]/g,
			(c) => '\\u' + c.charCodeAt(0).toString(16).padStart(4, '0')
		)
		if (str.includes('\'') && !str.includes('"')) {
			return '"' + str + '"'
		}
		return '\'' + str.replace(/'/g, '\\\'') + '\''
	}

	function prettify_any(val) {
		switch (typeof val) {
		case 'undefined':
			return 'undefined'

		case 'boolean':
			return val ? 'true' : 'false'

		case 'number':
			return String(val)

		case 'string':
			return prettify_string(val)

		case 'object':
			if (val === null) {
				return 'null'
			}
			if (Array.isArray(val)) {
				if (seen.has(val)) {
					return '[...]'
				}
				if (val.length === 0) {
					return '[]'
				}
				let result = '[\n'
				seen.add(val)
				nesting_level++
				result += val.map((x) => indent() + prettify_any(x) + ',\n').join('')
				nesting_level--
				seen.delete(val)
				result += indent() + ']'
				return result
			}
			if (seen.has(val)) {
				return '{...}'
			}
			const entries = Object.entries(val)
			if (entries.length === 0) {
				return '{}'
			}
			let result = '{\n'
			seen.add(val)
			nesting_level++
			result += entries
				.sort(([k1], [k2]) => (k1 < k2 ? -1 : k1 > k2 ? 1 : 0))
				.map(
					([k, v]) =>
						indent() + prettify_string(k) + ': ' + prettify_any(v) + ',\n'
				)
				.join('')
			nesting_level--
			seen.delete(val)
			result += indent() + '}'
			return result

		case 'function':
			return 'function () { ... }'
		}
		throw 'not implemented: ' + typeof val + ' ' + val
	}

	return prettify_any(val) + '\n'
}

// 
// console.log(
// 	prettify({'light red': {'bright white': '1', 'muted yellow': '2'}, 'dark orange': {'bright white': '3', 'muted yellow': '4'}, 'bright white': {'shiny gold': '1'}, 'muted yellow': {'shiny gold': '2', 'faded blue': '9'}, 'shiny gold': {'dark olive': '1', 'vibrant plum': '2'}, 'dark olive': {'faded blue': '3', 'dotted black': '4'}, 'vibrant plum': {'faded blue': '5', 'dotted black': '6'}, 'faded blue': {'no other': ''}, 'dotted black': {'no other': ''}})
// )

  prettify( {'Hostname': '579174cc82a1', 'Domainname': '', 'User': '', 'AttachStdin': False, 'AttachStdout': False, 'AttachStderr': False, 'ExposedPorts': {'80/tcp': {}}, 'Tty': False, 'OpenStdin': False, 'StdinOnce': False, 'Env': ['PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin', 'NGINX_VERSION=1.19.6', 'NJS_VERSION=0.5.0', 'PKG_RELEASE=1~buster'], 'Cmd': ['nginx', '-g', 'daemon off;'], 'Image': 'lukasjoc:latest', 'Volumes': None, 'WorkingDir': '/usr/share/nginx/html', 'Entrypoint': ['/docker-entrypoint.sh'], 'OnBuild': None, 'Labels': {'maintainer': 'NGINX Docker Maintainers <docker-maint@nginx.com>'}, 'StopSignal': 'SIGQUIT'}
{'Hostname': '37fa51be708d', 'Domainname': '', 'User': '', 'AttachStdin': False, 'AttachStdout': False, 'AttachStderr': False, 'ExposedPorts': {'3306/tcp': {}}, 'Tty': False, 'OpenStdin': False, 'StdinOnce': False, 'Env': ['MYSQL_ALLOW_EMPTY_PASSWORD=true', 'MYSQL_HOST=localhost', 'PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin', 'GOSU_VERSION=1.12', 'GPG_KEYS=177F4010FE56CA3336300305F1656F24C74CD1D8', 'MARIADB_MAJOR=10.5', 'MARIADB_VERSION=1:10.5.8+maria~focal'], 'Cmd': ['mysqld'], 'Image': 'mariadb:latest', 'Volumes': {'/var/lib/mysql': {}}, 'WorkingDir': '', 'Entrypoint': ['docker-entrypoint.sh'], 'OnBuild': None, 'Labels': {'com.docker.compose.config-hash': '3eba587a4b473f4af14fdb205ba8613573a28329f3672f330a1bee92b72d29dd', 'com.docker.compose.container-number': '1', 'com.docker.compose.oneoff': 'False', 'com.docker.compose.project': 'mariadb', 'com.docker.compose.project.config_files': 'docker-compose.yml', 'com.docker.compose.project.working_dir': '/Users/jochamlu/.local/share/mdb/docker/mariadb', 'com.docker.compose.service': 'mariadb', 'com.docker.compose.version': '1.27.4'}}
  )
