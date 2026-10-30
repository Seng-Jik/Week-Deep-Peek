const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Read the message
const msgFile = path.join('D:\\Vim\\深度一瞥', '_cron_msg_utf8.txt');
const msg = fs.readFileSync(msgFile, 'utf8');

// Path to openclaw CLI
const cli = 'openclaw';

// Arguments
const args = [
  'cron', 'add',
  '--name', '每周深度一瞥',
  '--cron', '1 18 * * 5',
  '--tz', 'Asia/Shanghai',
  '--session', 'isolated',
  '--announce',
  '--channel', 'qqbot',
  '--to', '3E23628ECDBA3DFF314D8A1F13070E98',
  '--timeout-seconds', '900',
  '--message', msg,
  '--tools', 'read edit write apply_patch exec process cron get_goal create_goal update_goal skill_workshop update_plan sessions_list sessions_history sessions_send sessions_spawn sessions_yield subagents session_status web_search web_fetch memory_search memory_get',
];

console.log('Creating cron job with Node.js child_process...');

// Use shell: true with PowerShell, pipe stdin/out/err with utf8 encoding
const result = spawnSync(cli, args, {
  shell: 'powershell.exe',
  encoding: 'utf8',
  maxBuffer: 10 * 1024 * 1024,
  windowsHide: true,
  env: { ...process.env }
});

console.log('Exit code:', result.status);
if (result.stdout) console.log('STDOUT:', result.stdout.substring(0, 1000));
if (result.stderr) console.log('STDERR:', result.stderr.substring(0, 500));

// Also write result to a file for inspection
fs.writeFileSync('D:\\Vim\\深度一瞥\\_cron_result.txt', 
  'Exit code: ' + result.status + '\n\nSTDOUT:\n' + (result.stdout || '') + '\n\nSTDERR:\n' + (result.stderr || ''), 
  'utf8');
