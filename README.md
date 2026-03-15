<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>CCTV Shield — Pan India</title>
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<style>
:root{
  --bg:#eef2ff;--surface:#fff;--surface2:#f5f7ff;--border:#e0e7ff;
  --primary:#1e40af;--primary2:#2563eb;--primary3:#3b82f6;--primary-light:#dbeafe;--primary-glow:rgba(37,99,235,0.15);
  --accent:#0ea5e9;--teal:#0d9488;
  --green:#059669;--green-l:#d1fae5;--green-d:#065f46;--green2:#10b981;
  --red:#dc2626;--red-l:#fee2e2;--red-d:#991b1b;
  --amber:#d97706;--amber-l:#fef3c7;--amber-d:#78350f;--amber2:#f59e0b;
  --purple:#7c3aed;--purple-l:#ede9fe;--purple2:#8b5cf6;
  --pink:#db2777;--pink-l:#fce7f3;
  --slate:#475569;--muted:#94a3b8;
  --text:#0f172a;--text2:#334155;--text3:#64748b;
  --sh:0 1px 3px rgba(15,23,42,.05),0 4px 16px rgba(37,99,235,.08);
  --sh-hover:0 8px 32px rgba(37,99,235,.18);
  --r:16px;--r2:10px;--r3:8px;
}
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:'Outfit',sans-serif;background:var(--bg);color:var(--text);min-height:100vh}
.app{display:flex;min-height:100vh}
.sidebar{width:240px;min-height:100vh;background:linear-gradient(180deg,#0f172a 0%,#1e293b 100%);
  display:flex;flex-direction:column;position:fixed;top:0;left:0;bottom:0;z-index:100;box-shadow:4px 0 32px rgba(15,23,42,.25)}
.main{margin-left:240px;flex:1}
.logo{padding:26px 20px 20px;border-bottom:1px solid rgba(255,255,255,.08)}
.logo-wrap{display:flex;align-items:center;gap:12px}
.logo-icon{width:42px;height:42px;background:linear-gradient(135deg,#3b82f6,#0ea5e9);border-radius:13px;
  display:flex;align-items:center;justify-content:center;font-size:20px;box-shadow:0 4px 16px rgba(59,130,246,.45)}
.logo-name{font-family:'Syne',sans-serif;font-weight:800;font-size:17px;color:#fff}
.logo-tag{font-size:9.5px;color:rgba(255,255,255,.4);letter-spacing:1px;margin-top:2px;text-transform:uppercase}
.nav{padding:16px 12px;flex:1}
.nav-sec{font-size:9.5px;font-weight:700;color:rgba(255,255,255,.3);letter-spacing:1.5px;text-transform:uppercase;padding:0 10px;margin:18px 0 6px}
.nav-item{display:flex;align-items:center;gap:11px;padding:10px 12px;border-radius:11px;cursor:pointer;
  transition:all .2s;font-size:13.5px;font-weight:500;color:rgba(255,255,255,.55);margin-bottom:3px;user-select:none;position:relative}
.nav-item:hover{background:rgba(255,255,255,.08);color:rgba(255,255,255,.9)}
.nav-item.active{background:linear-gradient(135deg,rgba(59,130,246,.3),rgba(14,165,233,.2));color:#fff;font-weight:700;box-shadow:inset 0 0 0 1px rgba(59,130,246,.4)}
.nav-item.active::before{content:'';position:absolute;left:-1px;top:50%;transform:translateY(-50%);width:3px;height:70%;background:linear-gradient(180deg,#3b82f6,#0ea5e9);border-radius:0 3px 3px 0}
.nav-item .ni{font-size:16px;width:22px;text-align:center}
.nbadge{margin-left:auto;background:linear-gradient(135deg,#ef4444,#dc2626);color:#fff;font-size:10px;font-weight:800;padding:2px 8px;border-radius:20px;min-width:22px;text-align:center}
.nbadge.am{background:linear-gradient(135deg,#f59e0b,#d97706)}
.sf{padding:16px 18px;border-top:1px solid rgba(255,255,255,.08)}
.sf-user{display:flex;align-items:center;gap:10px}
.sf-av{width:34px;height:34px;border-radius:50%;background:linear-gradient(135deg,#3b82f6,#7c3aed);display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800;color:#fff}
.sf-name{font-size:13px;font-weight:600;color:#fff}
.sf-role{font-size:10.5px;color:rgba(255,255,255,.4)}
.topbar{background:rgba(255,255,255,.85);backdrop-filter:blur(12px);border-bottom:1px solid var(--border);
  padding:0 32px;height:64px;display:flex;align-items:center;justify-content:space-between;
  position:sticky;top:0;z-index:50;box-shadow:0 1px 0 var(--border),0 4px 20px rgba(37,99,235,.06)}
.tb-title{font-family:'Syne',sans-serif;font-weight:800;font-size:20px;letter-spacing:-.4px;
  background:linear-gradient(135deg,#1e40af,#0ea5e9);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.tb-sub{font-size:11px;color:var(--muted);margin-top:2px}
.btn{display:inline-flex;align-items:center;gap:7px;padding:9px 18px;border-radius:var(--r2);font-size:13px;font-weight:600;cursor:pointer;border:none;transition:all .2s;font-family:inherit}
.btn-p{background:linear-gradient(135deg,#2563eb,#1d4ed8);color:#fff;box-shadow:0 2px 8px rgba(37,99,235,.3)}
.btn-p:hover{transform:translateY(-1px);box-shadow:0 6px 20px rgba(37,99,235,.4)}
.btn-o{background:transparent;color:var(--primary2);border:1.5px solid var(--primary2)}.btn-o:hover{background:var(--primary-light)}
.btn-g{background:var(--surface2);color:var(--text2);border:1px solid var(--border)}.btn-g:hover{background:var(--border)}
.btn-sm{padding:6px 13px;font-size:12px}
.btn-dl{background:linear-gradient(135deg,#059669,#0d9488);color:#fff;box-shadow:0 2px 10px rgba(5,150,105,.25)}
.btn-dl:hover{transform:translateY(-1px)}
.btn-danger{background:linear-gradient(135deg,#dc2626,#b91c1c);color:#fff}
.content{padding:26px 32px}
.section{display:none;animation:fadeIn .25s ease}.section.active{display:block}
@keyframes fadeIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}
.stats{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-bottom:24px}
.stat{background:var(--surface);border-radius:var(--r);padding:20px 22px;border:1px solid var(--border);box-shadow:var(--sh);display:flex;align-items:center;gap:16px;transition:all .22s}
.stat:hover{transform:translateY(-2px);box-shadow:var(--sh-hover)}
.stat-ic{width:50px;height:50px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0}
.ic-bl{background:linear-gradient(135deg,#dbeafe,#bfdbfe);box-shadow:0 4px 12px rgba(59,130,246,.2)}
.ic-gr{background:linear-gradient(135deg,#d1fae5,#a7f3d0);box-shadow:0 4px 12px rgba(16,185,129,.2)}
.ic-rd{background:linear-gradient(135deg,#fee2e2,#fecaca);box-shadow:0 4px 12px rgba(239,68,68,.2)}
.ic-am{background:linear-gradient(135deg,#fef3c7,#fde68a);box-shadow:0 4px 12px rgba(245,158,11,.2)}
.ic-pu{background:linear-gradient(135deg,#ede9fe,#ddd6fe);box-shadow:0 4px 12px rgba(139,92,246,.2)}
.stat-v{font-family:'Syne',sans-serif;font-size:30px;font-weight:800;line-height:1}
.stat-l{font-size:11px;color:var(--muted);margin-top:4px;font-weight:500}
.card{background:var(--surface);border-radius:var(--r);border:1px solid var(--border);box-shadow:var(--sh);overflow:hidden}
.ch{padding:18px 22px;border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;background:linear-gradient(to right,var(--surface),var(--surface2))}
.ct{font-family:'Syne',sans-serif;font-size:15px;font-weight:800;letter-spacing:-.2px}
.cb{padding:22px}
.filters{display:flex;align-items:center;gap:10px;flex-wrap:wrap}
.sb{position:relative}
.sb input{padding:8px 13px 8px 35px;border:1.5px solid var(--border);border-radius:var(--r2);font-size:12.5px;font-family:inherit;background:var(--surface);color:var(--text);width:210px;transition:all .2s}
.sb input:focus{outline:none;border-color:var(--primary3);box-shadow:0 0 0 3px var(--primary-glow)}
.sb .si{position:absolute;left:11px;top:50%;transform:translateY(-50%);color:var(--muted);font-size:14px;pointer-events:none}
select,input[type=date],input[type=text],input[type=email],input[type=number],textarea{
  padding:9px 13px;border:1.5px solid var(--border);border-radius:var(--r2);font-size:13px;font-family:inherit;background:var(--surface);color:var(--text);transition:all .2s}
select:focus,input:focus,textarea:focus{outline:none;border-color:var(--primary3);box-shadow:0 0 0 3px var(--primary-glow)}
.tw{overflow-x:auto}
table{width:100%;border-collapse:collapse;font-size:13px}
thead{position:sticky;top:0;z-index:2}
th{background:linear-gradient(to bottom,#1e293b,#0f172a);color:rgba(255,255,255,.8);text-align:left;padding:10px 14px;font-size:10px;font-weight:700;letter-spacing:.8px;text-transform:uppercase;white-space:nowrap}
td{padding:11px 14px;border-bottom:1px solid var(--border);color:var(--text2);vertical-align:middle;transition:background .15s}
tbody tr:last-child td{border-bottom:none}
tbody tr:nth-child(even) td{background:rgba(238,242,255,.4)}
tbody tr:hover td{background:rgba(219,234,254,.5)}
.badge{display:inline-flex;align-items:center;gap:4px;padding:4px 10px;border-radius:20px;font-size:11px;font-weight:700;white-space:nowrap}
.bg{background:linear-gradient(135deg,#d1fae5,#a7f3d0);color:#065f46}
.br{background:linear-gradient(135deg,#fee2e2,#fecaca);color:#991b1b}
.ba{background:linear-gradient(135deg,#fef3c7,#fde68a);color:#78350f}
.bb{background:linear-gradient(135deg,#dbeafe,#bfdbfe);color:#1e40af}
.bp{background:linear-gradient(135deg,#ede9fe,#ddd6fe);color:#5b21b6}
.bx{background:var(--surface2);color:var(--text3);border:1px solid var(--border)}
.ov{position:fixed;inset:0;background:rgba(15,23,42,.55);z-index:200;display:flex;align-items:center;justify-content:center;padding:20px;backdrop-filter:blur(6px);opacity:0;pointer-events:none;transition:opacity .25s}
.ov.open{opacity:1;pointer-events:all}
.modal{background:var(--surface);border-radius:20px;width:100%;max-width:620px;max-height:92vh;overflow-y:auto;box-shadow:0 32px 80px rgba(15,23,42,.28);transform:translateY(16px) scale(.97);transition:transform .25s;border:1px solid var(--border)}
.ov.open .modal{transform:translateY(0) scale(1)}
.mh{padding:22px 26px 18px;border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between;background:linear-gradient(135deg,#0f172a,#1e293b)}
.mt2{font-family:'Syne',sans-serif;font-size:17px;font-weight:800;color:#fff}
.mc{width:32px;height:32px;border-radius:8px;background:rgba(255,255,255,.1);border:none;cursor:pointer;font-size:16px;display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,.7);transition:all .18s}
.mc:hover{background:rgba(255,255,255,.2);color:#fff}
.mb{padding:22px 26px}
.mf{padding:16px 26px 22px;border-top:1px solid var(--border);display:flex;justify-content:flex-end;gap:10px;background:var(--surface2)}
.fr{display:grid;grid-template-columns:1fr 1fr;gap:16px}
.fg{display:flex;flex-direction:column;gap:6px;margin-bottom:16px}
.fg label{font-size:11.5px;font-weight:700;color:var(--text2);letter-spacing:.4px;text-transform:uppercase}
.fg select,.fg input,.fg textarea{width:100%}
.fg textarea{resize:vertical;min-height:75px}
.pbar{flex:1;max-width:90px;background:var(--surface2);border-radius:4px;height:6px;overflow:hidden;border:1px solid var(--border)}
.pbar-inner{background:linear-gradient(to right,#2563eb,#0ea5e9);height:100%;border-radius:4px;transition:width .4s ease}
.cred-box{background:linear-gradient(135deg,#0f172a,#1e293b);border-radius:12px;padding:16px;margin-bottom:16px;border:1px solid rgba(59,130,246,.3)}
.cred-label{font-size:9.5px;font-weight:800;color:rgba(255,255,255,.4);letter-spacing:1.2px;text-transform:uppercase;margin-bottom:5px}
.cred-value{font-family:'Outfit',sans-serif;font-size:14px;font-weight:700;color:#fff;background:rgba(255,255,255,.08);padding:7px 13px;border-radius:8px;display:inline-block;border:1px solid rgba(255,255,255,.1);letter-spacing:.5px}
.info-tile{background:var(--surface2);border-radius:11px;padding:13px;border:1px solid var(--border)}
.info-tile-label{font-size:9.5px;color:var(--muted);font-weight:700;margin-bottom:5px;letter-spacing:.5px;text-transform:uppercase}
.info-tile-val{font-weight:700;font-size:14px}
.detail-panel{background:linear-gradient(135deg,#f5f7ff,#eef2ff);border-radius:14px;padding:18px;margin-bottom:16px;border:1px solid var(--border)}
.dp-title{font-weight:800;font-size:13px;margin-bottom:14px;display:flex;align-items:center;gap:8px;color:var(--primary)}
.ch-grid{display:grid;gap:5px}
.ch-slot{border-radius:7px;height:36px;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;border:1.5px solid var(--border);transition:all .15s;flex-direction:column;gap:1px}
.ch-slot.occ{background:linear-gradient(135deg,#dbeafe,#bfdbfe);border-color:var(--primary3);color:var(--primary)}
.ch-slot.emp{background:rgba(255,255,255,.6);color:var(--muted)}
.av{width:38px;height:38px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:800;color:#fff;flex-shrink:0}
.av-colors{background:linear-gradient(135deg,#2563eb,#7c3aed)}
.av-colors2{background:linear-gradient(135deg,#059669,#0ea5e9)}
.av-colors3{background:linear-gradient(135deg,#d97706,#db2777)}
.toast{position:fixed;bottom:24px;right:24px;background:linear-gradient(135deg,#0f172a,#1e293b);color:#fff;padding:12px 20px;border-radius:12px;font-size:13px;font-weight:600;z-index:999;transform:translateY(80px);opacity:0;transition:all .3s cubic-bezier(.175,.885,.32,1.275);box-shadow:0 8px 32px rgba(15,23,42,.35);display:flex;align-items:center;gap:9px;border:1px solid rgba(255,255,255,.1)}
.toast.show{transform:translateY(0);opacity:1}
.toast.green{background:linear-gradient(135deg,#059669,#0d9488)}
.toast.red{background:linear-gradient(135deg,#dc2626,#b91c1c)}
::-webkit-scrollbar{width:5px;height:5px}
::-webkit-scrollbar-thumb{background:var(--border);border-radius:3px}
.ab{background:none;border:none;cursor:pointer;padding:5px 8px;border-radius:7px;font-size:14px;transition:all .15s}
.ab:hover{background:var(--primary-light);transform:scale(1.1)}
.ab.del:hover{background:var(--red-l)}
.dot{display:inline-block;width:7px;height:7px;border-radius:50%;margin-right:5px}
.dg{background:var(--green)}.dr{background:var(--red)}.da{background:var(--amber)}.dx{background:var(--muted)}
.action-btns{display:flex;gap:2px;align-items:center;white-space:nowrap}

/* Access Control Cards */
.acc-card{background:var(--surface);border:1px solid var(--border);border-radius:14px;overflow:hidden;box-shadow:var(--sh);transition:all .2s}
.acc-card:hover{box-shadow:var(--sh-hover);transform:translateY(-2px)}
.acc-card-head{background:linear-gradient(135deg,var(--primary),var(--accent));padding:14px 16px 12px}
.acc-card-store{font-weight:800;font-size:13.5px;color:#fff;line-height:1.3}
.acc-card-meta{font-size:11px;color:rgba(255,255,255,.75);margin-top:3px}
.acc-card-badges{display:flex;gap:6px;margin-top:8px;flex-wrap:wrap;align-items:center}
.acc-badge-count{background:rgba(255,255,255,.22);color:#fff;font-size:10px;font-weight:800;padding:2px 9px;border-radius:20px}
.acc-card-body{padding:10px 12px}
.acc-person-row{display:flex;align-items:center;gap:10px;padding:7px 8px;border-radius:9px;transition:background .15s;margin-bottom:2px}
.acc-person-row:hover{background:var(--surface2)}
.acc-person-row:last-child{margin-bottom:0}
.acc-person-info{flex:1;min-width:0}
.acc-person-name{font-weight:600;font-size:13px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.acc-person-email{font-size:11px;color:var(--primary2);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.acc-row-actions{display:flex;gap:2px;opacity:0;transition:opacity .15s;flex-shrink:0}
.acc-person-row:hover .acc-row-actions{opacity:1}
.acc-add-btn{width:100%;padding:8px;border:1.5px dashed var(--border);border-radius:9px;background:none;cursor:pointer;font-size:12px;color:var(--muted);font-family:inherit;transition:all .2s;margin-top:4px;display:flex;align-items:center;justify-content:center;gap:6px}
.acc-add-btn:hover{border-color:var(--primary3);color:var(--primary2);background:var(--primary-light)}
</style>
</head>
<body>
<div class="app">
<aside class="sidebar">
  <div class="logo">
    <div class="logo-wrap">
      <div class="logo-icon">📹</div>
      <div><div class="logo-name">CCTV Shield</div><div class="logo-tag">PAN INDIA MANAGER</div></div>
    </div>
  </div>
  <nav class="nav">
    <div class="nav-sec">Management</div>
    <div class="nav-item active" onclick="nav('master')"><span class="ni">🏪</span>Master Data</div>
    <div class="nav-item" onclick="nav('service')"><span class="ni">🔧</span>Service Log<span class="nbadge" id="b-svc">0</span></div>
    <div class="nav-item" onclick="nav('access')"><span class="ni">🔑</span>Access Control</div>
    <div class="nav-sec">Monitoring</div>
    <div class="nav-item" onclick="nav('monitor')"><span class="ni">📊</span>CCTV Report<span class="nbadge am" id="b-mon">0</span></div>
  </nav>
  <div class="sf">
    <div class="sf-user">
      <div class="sf-av">M</div>
      <div><div class="sf-name">Manish</div><div class="sf-role">CCTV Administrator</div></div>
    </div>
  </div>
</aside>
<main class="main">
<div class="topbar">
  <div><div class="tb-title" id="pg-title">🏪 Master Data</div><div class="tb-sub" id="pg-sub">Stores, DVRs & Camera inventory</div></div>
  <div id="tb-actions"><button class="btn btn-p" onclick="openAddStore()">＋ Add Store</button></div>
</div>
<div class="content">

<!-- MASTER DATA -->
<section class="section active" id="s-master">
  <div class="stats" id="master-stats"></div>
  <div class="card">
    <div class="ch">
      <div class="ct">📋 Store & DVR Directory</div>
      <div class="filters">
        <div class="sb"><span class="si">🔍</span><input type="text" id="m-q" placeholder="Search store…" oninput="renderMaster()"></div>
        <select id="m-city" onchange="renderMaster()"><option value="">All Cities</option></select>
        <select id="m-ent" onchange="renderMaster()"><option value="">All Entities</option></select>
      </div>
    </div>
    <div class="tw"><table><thead><tr>
      <th>City</th><th>Entity</th><th>Store / DVR</th><th>DVR Serial</th><th>Channels</th><th>Cameras</th><th>Empty Slots</th><th>Recording Since</th><th>Days</th><th>Actions</th>
    </tr></thead><tbody id="m-body"></tbody></table></div>
  </div>
</section>

<!-- SERVICE LOG -->
<section class="section" id="s-service">
  <div class="stats" id="svc-stats"></div>
  <div class="card">
    <div class="ch">
      <div class="ct">🔧 Service Log</div>
      <div class="filters">
        <div class="sb"><span class="si">🔍</span><input type="text" id="sv-q" placeholder="Search…" oninput="renderService()"></div>
        <select id="sv-city" onchange="renderService()"><option value="">All Cities</option></select>
        <select id="sv-store" onchange="renderService()"><option value="">All Stores</option></select>
        <select id="sv-status" onchange="renderService()"><option value="">All Status</option><option>Open</option><option>In Progress</option><option>Resolved</option></select>
      </div>
    </div>
    <div class="tw"><table><thead><tr>
      <th>Date</th><th>City</th><th>Store</th><th>DVR</th><th>Issue Type</th><th>Work Done</th><th>Vendor</th><th>Response</th><th>Verified By</th><th>Cost (₹)</th><th>Status</th><th>Actions</th>
    </tr></thead><tbody id="sv-body"></tbody></table></div>
  </div>
</section>

<!-- ACCESS CONTROL -->
<section class="section" id="s-access">
  <div class="stats" id="acc-stats" style="margin-bottom:20px"></div>
  <div class="card">
    <div class="ch">
      <div class="ct">🔑 Camera Access Directory</div>
      <div class="filters">
        <div class="sb"><span class="si">🔍</span><input type="text" id="ac-q" placeholder="Search store or email…" oninput="renderAccess()"></div>
        <select id="ac-city" onchange="renderAccess()"><option value="">All Cities</option></select>
        <select id="ac-brand" onchange="renderAccess()"><option value="">All Brands</option></select>
      </div>
    </div>
    <div class="cb" id="ac-body" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(340px,1fr));gap:14px"></div>
  </div>
</section>

<!-- MONITOR -->
<section class="section" id="s-monitor">
  <div class="stats" id="mon-stats"></div>
  <div class="card">
    <div class="ch">
      <div class="ct">📊 CCTV Visibility — Pan India Report</div>
      <div class="filters">
        <div class="sb"><span class="si">🔍</span><input type="text" id="mn-q" placeholder="Search…" oninput="renderMonitor()"></div>
        <select id="mn-city" onchange="renderMonitor()"><option value="">All Cities</option></select>
        <select id="mn-status" onchange="renderMonitor()"><option value="">All Status</option><option>working</option><option>Issue</option><option>Store Closed</option><option>Not accessible</option></select>
        <button class="btn btn-dl btn-sm" onclick="downloadReport()">⬇ Download</button>
        <button class="btn btn-p btn-sm" onclick="openMonModal()">＋ Add Entry</button>
      </div>
    </div>
    <div class="tw"><table><thead><tr>
      <th>City</th><th>Store Name</th><th>DVR Status</th><th>Issue Type</th><th>Vision</th><th>Check Date</th><th>Channel</th><th>Cameras</th><th>Not Working</th><th>Remarks</th><th>Actions</th>
    </tr></thead><tbody id="mn-body"></tbody></table></div>
  </div>
</section>

</div>
</main>
</div>

<!-- ======= MODAL: STORE DETAIL ======= -->
<div class="ov" id="ov-detail">
<div class="modal" style="max-width:700px">
  <div class="mh"><div class="mt2" id="det-title">📹 Store Detail</div><button class="mc" onclick="closeOv('ov-detail')">✕</button></div>
  <div class="mb" id="det-body"></div>
</div>
</div>

<!-- ======= MODAL: ADD/EDIT STORE ======= -->
<div class="ov" id="ov-store">
<div class="modal">
  <div class="mh"><div class="mt2" id="stor-title">➕ Add Store</div><button class="mc" onclick="closeOv('ov-store')">✕</button></div>
  <div class="mb">
    <div class="fr">
      <div class="fg"><label>City *</label><input type="text" id="st-city" list="dl-city"><datalist id="dl-city"></datalist></div>
      <div class="fg"><label>Entity / Brand</label><input type="text" id="st-ent"></div>
    </div>
    <div class="fr">
      <div class="fg"><label>Store Name *</label><input type="text" id="st-name"></div>
      <div class="fg"><label>DVR Serial No.</label><input type="text" id="st-serial"></div>
    </div>
    <div class="fr">
      <div class="fg"><label>Encryption Code</label><input type="text" id="st-enc"></div>
      <div class="fg"><label>DVR Channels</label><select id="st-ch"><option>4</option><option>8</option><option selected>16</option><option>32</option></select></div>
    </div>
    <div class="fr">
      <div class="fg"><label>Cameras Installed</label><input type="number" id="st-cams" min="0"></div>
      <div class="fg"><label>Recording Start Date</label><input type="date" id="st-rec"></div>
    </div>
    <div style="background:linear-gradient(135deg,#0f172a,#1e293b);border:1px solid rgba(59,130,246,.3);border-radius:12px;padding:16px;margin-bottom:16px">
      <div style="font-size:10px;font-weight:800;color:rgba(255,255,255,.5);letter-spacing:1px;text-transform:uppercase;margin-bottom:12px">🔐 DVR Login Credentials</div>
      <div class="fr" style="margin-bottom:0">
        <div class="fg" style="margin-bottom:0"><label style="color:rgba(255,255,255,.5)">Admin Username</label><input type="text" id="st-admin-user" style="background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.15);color:#fff"></div>
        <div class="fg" style="margin-bottom:0"><label style="color:rgba(255,255,255,.5)">Admin Password</label><input type="text" id="st-admin-pass" style="background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.15);color:#fff"></div>
      </div>
    </div>
    <div class="fg"><label>Additional Remarks</label><textarea id="st-remarks"></textarea></div>
    <div class="fg"><label>Status</label>
      <select id="st-status"><option>working</option><option>Issue</option><option>Store Closed</option><option>Not accessible</option></select>
    </div>
  </div>
  <div class="mf">
    <button class="btn btn-g" onclick="closeOv('ov-store')">Cancel</button>
    <button class="btn btn-p" onclick="saveStore()">💾 Save</button>
  </div>
</div>
</div>

<!-- ======= MODAL: ADD/EDIT SERVICE ======= -->
<div class="ov" id="ov-svc">
<div class="modal">
  <div class="mh"><div class="mt2" id="svc-modal-title">🔧 Log Service Entry</div><button class="mc" onclick="closeOv('ov-svc')">✕</button></div>
  <div class="mb">
    <div class="fr">
      <div class="fg"><label>City *</label><select id="sv-c-in" onchange="populateSvcStores()"><option value="">Select City</option></select></div>
      <div class="fg"><label>Store *</label><select id="sv-s-in"><option value="">Select Store</option></select></div>
    </div>
    <div class="fr">
      <div class="fg"><label>DVR</label><input type="text" id="sv-dvr-in"></div>
      <div class="fg"><label>Issue Date *</label><input type="date" id="sv-date-in"></div>
    </div>
    <div class="fr">
      <div class="fg"><label>Issue Type *</label>
        <select id="sv-issue-in">
          <option>Entire DVR Offline</option><option>Disk Exception</option>
          <option>Camera Specific Issue - Not Working</option><option>Network Issue</option>
          <option>Electricity Problem</option><option>HDD Failure</option><option>Other</option>
        </select>
      </div>
      <div class="fg"><label>Work Done</label>
        <select id="sv-work-in">
          <option>Under Investigation</option><option>Camera Added</option><option>DVR Replaced</option>
          <option>HDD Changed</option><option>Network Fixed</option><option>DVR Rebooted</option><option>Other</option>
        </select>
      </div>
    </div>
    <div class="fr">
      <div class="fg"><label>Vendor Name</label><input type="text" id="sv-vend-in"></div>
      <div class="fg"><label>Vendor Response</label><input type="text" id="sv-resp-in"></div>
    </div>
    <div class="fr">
      <div class="fg"><label>Verified By</label><input type="text" id="sv-vby-in" value="Manish"></div>
      <div class="fg"><label>Status</label><select id="sv-stat-in"><option>Open</option><option>In Progress</option><option>Resolved</option></select></div>
    </div>
    <div class="fr">
      <div class="fg"><label>Cost (₹)</label><input type="number" id="sv-cost-in" min="0"></div>
      <div class="fg"><label>Remarks</label><input type="text" id="sv-rem-short-in"></div>
    </div>
    <div class="fg"><label>Detailed Notes</label><textarea id="sv-rem-in"></textarea></div>
  </div>
  <div class="mf">
    <button class="btn btn-g" onclick="closeOv('ov-svc')">Cancel</button>
    <button class="btn btn-p" onclick="saveSvc()">💾 Save</button>
  </div>
</div>
</div>

<!-- ======= MODAL: ADD/EDIT ACCESS ======= -->
<div class="ov" id="ov-acc">
<div class="modal">
  <div class="mh"><div class="mt2" id="acc-modal-title">🔑 Add Access Entry</div><button class="mc" onclick="closeOv('ov-acc')">✕</button></div>
  <div class="mb">
    <div class="fr">
      <div class="fg"><label>City *</label><input type="text" id="ac-city-in" list="dl-ac-city"><datalist id="dl-ac-city"></datalist></div>
      <div class="fg"><label>Brand</label><input type="text" id="ac-brand-in"></div>
    </div>
    <div class="fg"><label>Store Name *</label><input type="text" id="ac-store-in" list="dl-ac-store"><datalist id="dl-ac-store"></datalist></div>
    <div class="fr">
      <div class="fg"><label>Person Name</label><input type="text" id="ac-name-in"></div>
      <div class="fg"><label>Email *</label><input type="email" id="ac-email-in"></div>
    </div>
    <div class="fg"><label>Role</label><input type="text" id="ac-role-in" placeholder="e.g. Store Manager, Area Manager"></div>
  </div>
  <div class="mf">
    <button class="btn btn-g" onclick="closeOv('ov-acc')">Cancel</button>
    <button class="btn btn-p" onclick="saveAccess()">💾 Save</button>
  </div>
</div>
</div>

<!-- ======= MODAL: ADD/EDIT MONITORING ======= -->
<div class="ov" id="ov-mon">
<div class="modal">
  <div class="mh"><div class="mt2" id="mon-modal-title">📊 Add Monitoring Entry</div><button class="mc" onclick="closeOv('ov-mon')">✕</button></div>
  <div class="mb">
    <div class="fr">
      <div class="fg"><label>City *</label><select id="mn-c-in" onchange="populateMonStores()"><option value="">Select City</option></select></div>
      <div class="fg"><label>Store *</label><select id="mn-s-in"><option value="">Select Store</option></select></div>
    </div>
    <div class="fr">
      <div class="fg"><label>DVR Status *</label><select id="mn-ds-in"><option>working</option><option>Issue</option><option>Store Closed</option><option>Not accessible</option></select></div>
      <div class="fg"><label>Issue Type</label><select id="mn-it-in"><option value=""></option><option>Entire DVR Offline</option><option>Disk Exception</option><option>Camera Specific Issue - Not Working</option><option>Network Issue</option></select></div>
    </div>
    <div class="fr">
      <div class="fg"><label>Camera Vision</label><select id="mn-cv-in"><option>Clear</option><option>Blurry</option><option>No Signal</option></select></div>
      <div class="fg"><label>Check Date *</label><input type="date" id="mn-dt-in"></div>
    </div>
    <div class="fr">
      <div class="fg"><label>DVR Channel</label><input type="number" id="mn-ch-in"></div>
      <div class="fg"><label>Cameras Installed</label><input type="number" id="mn-cam-in"></div>
    </div>
    <div class="fr">
      <div class="fg"><label>Not Working Count</label><input type="number" id="mn-nw-in" value="0"></div>
      <div class="fg"><label>Remarks</label><input type="text" id="mn-rm-in"></div>
    </div>
  </div>
  <div class="mf">
    <button class="btn btn-g" onclick="closeOv('ov-mon')">Cancel</button>
    <button class="btn btn-p" onclick="saveMon()">💾 Save</button>
  </div>
</div>
</div>

<div class="toast" id="toast"></div>

<script>
// ======================================================
// CONFIG & DB
// ======================================================
const SB_URL = 'https://eagtjvutbzsrnitpnqqu.supabase.co';
const SB_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVhZ3RqdnV0Ynpzcm5pdHBucXF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM1ODU3OTAsImV4cCI6MjA4OTE2MTc5MH0.HZhDZ6E2-37L760Iqg_2p78Rd9XLnUnFszXM8b_EKSk';

const DB = { stores:[], services:[], access:[], monitoring:[] };

const SB = {
  h(){ return {'apikey':SB_KEY,'Authorization':'Bearer '+SB_KEY,'Content-Type':'application/json','Prefer':'return=representation'} },
  async get(t,p=''){ const r=await fetch(`${SB_URL}/rest/v1/${t}?${p}`,{headers:this.h()}); if(!r.ok)throw new Error(`GET ${t} ${r.status}`); return r.json() },
  async insert(t,d){ const r=await fetch(`${SB_URL}/rest/v1/${t}`,{method:'POST',headers:this.h(),body:JSON.stringify(d)}); if(!r.ok){const e=await r.text();throw new Error(e)} return r.json() },
  async update(t,id,d){ const r=await fetch(`${SB_URL}/rest/v1/${t}?id=eq.${id}`,{method:'PATCH',headers:this.h(),body:JSON.stringify(d)}); if(!r.ok){const e=await r.text();throw new Error(e)} return r.json() },
  async delete(t,id){ const r=await fetch(`${SB_URL}/rest/v1/${t}?id=eq.${id}`,{method:'DELETE',headers:this.h()}); if(!r.ok)throw new Error(`DELETE ${t} failed`) }
};

function mapStore(r){ return {...r, enc:r.enc_code||'', adminUser:r.admin_user||'', adminPass:r.admin_pass||'', recStart:r.rec_start||''} }
function mapService(r){ return {...r, store:r.store_name||'', issueDate:r.issue_date||'', issueType:r.issue_type||'', workDone:r.work_done||'', vendorResp:r.vendor_response||'', verifiedBy:r.verified_by||'', cost:parseFloat(r.cost)||0} }
function mapMonitoring(r){ return {...r, store:r.store_name||'', dvrStatus:r.dvr_status||'working', issueType:r.issue_type||'', camVision:r.cam_vision||'Clear', checkDate:r.check_date||'', camCount:parseInt(r.cam_count)||0, notWorking:parseInt(r.not_working)||0} }

// ======================================================
// HELPERS
// ======================================================
function today(){ return new Date().toISOString().slice(0,10) }
function fmtD(d){ if(!d)return '—'; try{return new Date(d).toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'})}catch(e){return d} }
function daysSince(d){ if(!d)return '—'; const ms=new Date('2026-03-15')-new Date(d); return ms<0?'—':Math.round(ms/86400000) }
function getCities(){ return [...new Set(DB.stores.map(s=>s.city).filter(Boolean))].sort() }
function getEntities(){ return [...new Set(DB.stores.map(s=>s.entity).filter(Boolean))].sort() }
function showToast(m,t=''){ const el=document.getElementById('toast'); el.textContent=m; el.className=`toast ${t} show`; setTimeout(()=>el.className='toast',2800) }
function openOv(id){ document.getElementById(id).classList.add('open') }
function closeOv(id){ document.getElementById(id).classList.remove('open') }

function nameFromEmail(e){
  const m={'rohit.singh@zfwhospitality.com':'Rohit Singh','thiruppathi.rajan@zfwhospitality.com':'Thiruppathi Rajan','ankit@zfwhospitality.com':'Ankit','saurabh@zfwhospitality.com':'Saurabh','simerpreet@zfwhospitality.com':'Simerpreet','hyperlocal.mumbai@zfwhospitality.com':'Hyperlocal Mumbai','mumbai@zfwhospitality.com':'Mumbai Team','musaib.bhatkar@gmail.com':'Musaib Bhatkar','faisal@zfwhospitality.com':'Faisal','Faisal@zfwhopitality.com':'Faisal','nikhil.singh@zfwhospitality.com':'Nikhil Singh','aakash.khokher@zfwhospitality.com':'Aakash Khokher','atul.sangwan@zfwhospitality.com':'Atul Sangwan'};
  const c=(e||'').trim(); return m[c]||c.split('@')[0].replace(/[._]/g,' ').replace(/\b\w/g,x=>x.toUpperCase());
}

// ======================================================
// NAVIGATION
// ======================================================
const PAGES = {
  master:{title:'🏪 Master Data',sub:'DVR inventory, cameras & encryption codes',actions:`<button class="btn btn-p" onclick="openAddStore()">＋ Add Store</button>`},
  service:{title:'🔧 Service Log',sub:'Track all service requests, vendor work & resolutions',actions:`<button class="btn btn-p" onclick="openSvcModal()">＋ Log Service</button>`},
  access:{title:'🔑 Access Control',sub:'Store-wise camera access assignments',actions:`<button class="btn btn-p" onclick="openAccModal()">＋ Add Access</button>`},

  monitor:{title:'📊 CCTV Report',sub:'Pan India camera visibility monitoring',actions:''},
};
function nav(page){
  document.querySelectorAll('.nav-item').forEach(el=>el.classList.remove('active'));
  document.querySelector(`[onclick="nav('${page}')"]`).classList.add('active');
  document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
  document.getElementById(`s-${page}`).classList.add('active');
  document.getElementById('pg-title').textContent=PAGES[page].title;
  document.getElementById('pg-sub').textContent=PAGES[page].sub;
  document.getElementById('tb-actions').innerHTML=PAGES[page].actions;
  if(page==='master')renderMaster();
  if(page==='service')renderService();
  if(page==='access')renderAccess();
  if(page==='monitor')renderMonitor();
  updateBadges();
}
function updateBadges(){
  document.getElementById('b-svc').textContent=DB.services.filter(s=>s.status!=='Resolved').length;
  document.getElementById('b-mon').textContent=DB.monitoring.filter(m=>m.dvrStatus==='Issue').length;
  const cities=getCities();
  ['m-city','sv-city','ac-city','mn-city'].forEach(id=>{
    const el=document.getElementById(id); if(!el)return;
    const cur=el.value;
    el.innerHTML=`<option value="">All Cities</option>`+cities.map(c=>`<option${c===cur?' selected':''}>${c}</option>`).join('');
  });
  const ents=getEntities();
  const entEl=document.getElementById('m-ent');
  if(entEl){const cur=entEl.value;entEl.innerHTML=`<option value="">All Entities</option>`+ents.map(e=>`<option${e===cur?' selected':''}>${e}</option>`).join('')}
  const brands=[...new Set(DB.access.map(a=>a.brand).filter(Boolean))].sort();
  const bEl=document.getElementById('ac-brand');
  if(bEl){const cur=bEl.value;bEl.innerHTML=`<option value="">All Brands</option>`+brands.map(b=>`<option${b===cur?' selected':''}>${b}</option>`).join('')}
}

// ======================================================
// MASTER DATA
// ======================================================
function renderMaster(){
  const q=(document.getElementById('m-q')||{}).value?.toLowerCase()||'';
  const cf=(document.getElementById('m-city')||{}).value||'';
  const ef=(document.getElementById('m-ent')||{}).value||'';
  const rows=DB.stores.filter(s=>(!cf||s.city===cf)&&(!ef||s.entity===ef)&&(s.name+s.city+(s.entity||'')).toLowerCase().includes(q));
  const total=DB.stores.length, totalCams=DB.stores.reduce((a,s)=>a+s.cameras,0);
  const totalSlots=DB.stores.reduce((a,s)=>a+s.channels,0), cities=getCities().length;
  document.getElementById('master-stats').innerHTML=`
    <div class="stat"><div class="stat-ic ic-bl">🏪</div><div><div class="stat-v">${total}</div><div class="stat-l">Total DVRs</div></div></div>
    <div class="stat"><div class="stat-ic ic-gr">📷</div><div><div class="stat-v">${totalCams}</div><div class="stat-l">Cameras Installed</div></div></div>
    <div class="stat"><div class="stat-ic ic-am">⬜</div><div><div class="stat-v">${totalSlots-totalCams}</div><div class="stat-l">Empty Slots</div></div></div>
    <div class="stat"><div class="stat-ic ic-pu">📍</div><div><div class="stat-v">${cities}</div><div class="stat-l">Cities</div></div></div>`;
  const body=document.getElementById('m-body');
  if(!rows.length){body.innerHTML=`<tr><td colspan="10" style="text-align:center;padding:32px;color:var(--muted)">No stores found</td></tr>`;return}
  body.innerHTML=rows.map(s=>{
    const empty=s.channels-s.cameras, pct=s.channels>0?Math.round(s.cameras/s.channels*100):0;
    const days=daysSince(s.recStart);
    return `<tr>
      <td><b>${s.city}</b></td>
      <td><span class="badge bb">${s.entity||'—'}</span></td>
      <td style="max-width:180px;font-size:12px"><b>${s.name}</b></td>
      <td><code style="font-size:11px;background:var(--surface2);padding:2px 7px;border-radius:5px">${s.serial||'—'}</code></td>
      <td style="text-align:center"><b>${s.channels}</b>CH</td>
      <td><div style="display:flex;align-items:center;gap:8px"><span style="font-weight:700;color:var(--primary2)">${s.cameras}</span><div class="pbar"><div class="pbar-inner" style="width:${pct}%"></div></div><span style="font-size:11px;color:var(--muted)">${pct}%</span></div></td>
      <td><span class="badge ${empty>0?'ba':'bg'}">${empty}</span></td>
      <td style="font-size:11px;color:var(--muted)">${fmtD(s.recStart)}</td>
      <td><span class="badge bp">${days}d</span></td>
      <td>
        <div class="action-btns">
          <button class="ab" onclick="showStoreDetail('${s.id}')" title="View">👁️</button>
          <button class="ab" onclick="editStore('${s.id}')" title="Edit">✏️</button>
          <button class="ab del" onclick="delStore('${s.id}')" title="Delete">🗑️</button>
        </div>
      </td>
    </tr>`
  }).join('');
}

function showStoreDetail(sid){
  const s=DB.stores.find(x=>x.id===sid); if(!s)return;
  document.getElementById('det-title').textContent=`📹 ${s.name}`;
  const empty=s.channels-s.cameras;
  const cols=s.channels<=8?4:8;
  let slots='';
  for(let i=1;i<=s.channels;i++){
    const occ=i<=s.cameras;
    slots+=`<div class="ch-slot ${occ?'occ':'emp'}">${occ?`<span style="font-size:8px">CAM</span><span>${i}</span>`:`<span>${i}</span>`}</div>`;
  }
  document.getElementById('det-body').innerHTML=`
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:16px">
      <div class="info-tile"><div class="info-tile-label">📍 City</div><div class="info-tile-val">${s.city}</div></div>
      <div class="info-tile"><div class="info-tile-label">🏷️ Entity</div><div class="info-tile-val">${s.entity||'—'}</div></div>
      <div class="info-tile"><div class="info-tile-label">📟 DVR Serial</div><code style="font-size:12px;font-weight:700;color:var(--primary)">${s.serial||'—'}</code></div>
      <div class="info-tile" style="background:linear-gradient(135deg,#fef3c7,#fde68a22);border-color:#fde68a">
        <div class="info-tile-label" style="color:var(--amber-d)">🔑 Encryption Code</div>
        <code style="font-size:13px;font-weight:800;color:var(--amber-d);background:var(--amber-l);padding:3px 10px;border-radius:6px;display:inline-block">${s.enc||'—'}</code>
      </div>
      <div class="info-tile">
        <div class="info-tile-label">🎥 Cameras</div>
        <div style="font-weight:800;font-size:20px;color:var(--primary2)">${s.cameras}<span style="font-size:12px;color:var(--muted);font-weight:400"> / ${s.channels} slots</span></div>
        <div style="font-size:11px;color:${empty>0?'var(--amber)':'var(--green)'};font-weight:600;margin-top:2px">⬜ ${empty} empty slot${empty!==1?'s':''}</div>
      </div>
      <div class="info-tile">
        <div class="info-tile-label">📅 Recording Since</div>
        <div class="info-tile-val">${fmtD(s.recStart)}</div>
        <div style="font-size:11px;color:var(--purple);font-weight:700;margin-top:3px">🗓️ ${daysSince(s.recStart)} days</div>
      </div>
    </div>
    ${s.remarks?`<div style="background:var(--amber-l);border-radius:10px;padding:12px;margin-bottom:12px;font-size:12px;border:1px solid #fde68a"><b>📝 Remarks:</b> ${s.remarks}</div>`:''}
    ${(s.adminUser||s.adminPass)?`<div class="cred-box"><div style="font-size:10px;font-weight:800;color:rgba(255,255,255,.5);letter-spacing:1.2px;text-transform:uppercase;margin-bottom:12px">🔐 DVR LOGIN CREDENTIALS</div><div style="display:grid;grid-template-columns:1fr 1fr;gap:12px"><div><div class="cred-label">Username</div><div class="cred-value">${s.adminUser}</div></div><div><div class="cred-label">Password</div><div class="cred-value" style="background:rgba(59,130,246,.18);border-color:rgba(59,130,246,.3);color:#93c5fd">${s.adminPass}</div></div></div></div>`:''}
    <div class="detail-panel">
      <div class="dp-title">🎛️ Channel Map — ${s.channels}CH DVR</div>
      <div class="ch-grid" style="grid-template-columns:repeat(${cols},1fr)">${slots}</div>
      <div style="display:flex;gap:16px;margin-top:10px;font-size:11px">
        <span style="color:var(--primary)">🟦 Installed: ${s.cameras}</span>
        <span style="color:var(--muted)">⬜ Empty: ${empty}</span>
      </div>
    </div>
    <div style="margin-top:12px;display:flex;gap:10px;justify-content:flex-end">
      <button class="btn btn-o btn-sm" onclick="closeOv('ov-detail');editStore('${s.id}')">✏️ Edit This Store</button>
    </div>`;
  openOv('ov-detail');
}

let editSid=null;
function openAddStore(){
  editSid=null;
  ['st-city','st-ent','st-name','st-serial','st-enc','st-remarks','st-admin-user','st-admin-pass'].forEach(id=>document.getElementById(id).value='');
  document.getElementById('st-ch').value='16';
  document.getElementById('st-cams').value='';
  document.getElementById('st-rec').value=today();
  document.getElementById('st-status').value='working';
  document.getElementById('stor-title').textContent='➕ Add Store';
  const dl=document.getElementById('dl-city');
  dl.innerHTML=getCities().map(c=>`<option value="${c}">`).join('');
  openOv('ov-store');
}
function editStore(sid){
  const s=DB.stores.find(x=>x.id===sid); if(!s)return;
  editSid=sid;
  document.getElementById('st-city').value=s.city;
  document.getElementById('st-ent').value=s.entity||'';
  document.getElementById('st-name').value=s.name;
  document.getElementById('st-serial').value=s.serial||'';
  document.getElementById('st-enc').value=s.enc||'';
  document.getElementById('st-remarks').value=s.remarks||'';
  document.getElementById('st-admin-user').value=s.adminUser||'';
  document.getElementById('st-admin-pass').value=s.adminPass||'';
  document.getElementById('st-ch').value=s.channels;
  document.getElementById('st-cams').value=s.cameras;
  document.getElementById('st-rec').value=s.recStart||'';
  document.getElementById('st-status').value=s.status;
  document.getElementById('stor-title').textContent='✏️ Edit Store';
  openOv('ov-store');
}
async function saveStore(){
  const city=document.getElementById('st-city').value.trim();
  const name=document.getElementById('st-name').value.trim();
  if(!city||!name){showToast('City and Store name required','red');return}
  const data={city,entity:document.getElementById('st-ent').value.trim(),name,serial:document.getElementById('st-serial').value.trim(),enc_code:document.getElementById('st-enc').value.trim(),admin_user:document.getElementById('st-admin-user').value.trim(),admin_pass:document.getElementById('st-admin-pass').value.trim(),remarks:document.getElementById('st-remarks').value.trim(),channels:parseInt(document.getElementById('st-ch').value),cameras:parseInt(document.getElementById('st-cams').value)||0,rec_start:document.getElementById('st-rec').value,status:document.getElementById('st-status').value};
  try{
    if(editSid){
      const [updated]=await SB.update('stores',editSid,data);
      const idx=DB.stores.findIndex(s=>s.id===editSid);
      if(idx>=0)DB.stores[idx]=mapStore(updated||{...data,id:editSid});
    } else {
      const [created]=await SB.insert('stores',data);
      DB.stores.push(mapStore(created));
    }
    closeOv('ov-store');renderMaster();updateBadges();showToast('Store saved ✓','green');
  }catch(e){showToast('Save failed: '+e.message,'red')}
}
async function delStore(sid){
  if(!confirm('Delete this store? This cannot be undone.'))return;
  try{await SB.delete('stores',sid);DB.stores=DB.stores.filter(s=>s.id!==sid);renderMaster();updateBadges();showToast('Store deleted','green')}
  catch(e){showToast('Delete failed','red')}
}

// ======================================================
// SERVICE LOG
// ======================================================
let editSvcId=null;
function openSvcModal(){
  editSvcId=null;
  document.getElementById('svc-modal-title').textContent='🔧 Log Service Entry';
  document.getElementById('sv-date-in').value=today();
  document.getElementById('sv-vby-in').value='Manish';
  document.getElementById('sv-stat-in').value='Open';
  ['sv-dvr-in','sv-vend-in','sv-resp-in','sv-rem-in','sv-rem-short-in','sv-cost-in'].forEach(id=>document.getElementById(id).value='');
  const el=document.getElementById('sv-c-in');
  el.innerHTML=`<option value="">Select City</option>`+getCities().map(c=>`<option>${c}</option>`).join('');
  document.getElementById('sv-s-in').innerHTML=`<option value="">Select Store</option>`;
  openOv('ov-svc');
}
function editSvc(id){
  const s=DB.services.find(x=>x.id===id); if(!s)return;
  editSvcId=id;
  document.getElementById('svc-modal-title').textContent='✏️ Edit Service Entry';
  const el=document.getElementById('sv-c-in');
  el.innerHTML=`<option value="">Select City</option>`+getCities().map(c=>`<option${c===s.city?' selected':''}>${c}</option>`).join('');
  populateSvcStores(s.store);
  document.getElementById('sv-dvr-in').value=s.dvr||'';
  document.getElementById('sv-date-in').value=s.issueDate||'';
  document.getElementById('sv-issue-in').value=s.issueType||'';
  document.getElementById('sv-work-in').value=s.workDone||'';
  document.getElementById('sv-vend-in').value=s.vendor||'';
  document.getElementById('sv-resp-in').value=s.vendorResp||'';
  document.getElementById('sv-vby-in').value=s.verifiedBy||'';
  document.getElementById('sv-stat-in').value=s.status||'Open';
  document.getElementById('sv-cost-in').value=s.cost||0;
  document.getElementById('sv-rem-in').value=s.remarks||'';
  document.getElementById('sv-rem-short-in').value='';
  openOv('ov-svc');
}
function populateSvcStores(selectVal=''){
  const city=document.getElementById('sv-c-in').value;
  const stores=DB.stores.filter(s=>s.city===city);
  document.getElementById('sv-s-in').innerHTML=`<option value="">Select Store</option>`+stores.map(s=>`<option${s.name===selectVal?' selected':''}>${s.name}</option>`).join('');
}
async function saveSvc(){
  const city=document.getElementById('sv-c-in').value;
  const store=document.getElementById('sv-s-in').value;
  if(!city||!store){showToast('City and Store required','red');return}
  const data={city,store_name:store,dvr:document.getElementById('sv-dvr-in').value,issue_date:document.getElementById('sv-date-in').value,issue_type:document.getElementById('sv-issue-in').value,work_done:document.getElementById('sv-work-in').value,vendor:document.getElementById('sv-vend-in').value,vendor_response:document.getElementById('sv-resp-in').value,verified_by:document.getElementById('sv-vby-in').value,status:document.getElementById('sv-stat-in').value,cost:parseFloat(document.getElementById('sv-cost-in').value)||0,remarks:document.getElementById('sv-rem-in').value};
  try{
    if(editSvcId){
      const [updated]=await SB.update('service_logs',editSvcId,data);
      const idx=DB.services.findIndex(s=>s.id===editSvcId);
      if(idx>=0)DB.services[idx]=mapService(updated||{...data,id:editSvcId});
    } else {
      const [created]=await SB.insert('service_logs',data);
      DB.services.unshift(mapService(created));
    }
    closeOv('ov-svc');renderService();updateBadges();showToast('Service entry saved ✓','green');
  }catch(e){showToast('Save failed: '+e.message,'red')}
}
function renderService(){
  const q=document.getElementById('sv-q').value.toLowerCase();
  const cf=document.getElementById('sv-city').value;
  const sf=document.getElementById('sv-status').value;
  const storeF=document.getElementById('sv-store').value;
  const cityStores=cf?DB.stores.filter(s=>s.city===cf).map(s=>s.name):[];
  const svStore=document.getElementById('sv-store');
  svStore.innerHTML=`<option value="">All Stores</option>`+(cf?cityStores.map(n=>`<option${n===storeF?' selected':''}>${n}</option>`).join(''):'');
  const rows=DB.services.filter(s=>(!cf||s.city===cf)&&(!sf||s.status===sf)&&(!storeF||s.store===storeF)&&(s.store+s.city+(s.issueType||'')+s.vendor).toLowerCase().includes(q)).sort((a,b)=>b.issueDate.localeCompare(a.issueDate));
  const open=rows.filter(s=>s.status==='Open').length, resolved=rows.filter(s=>s.status==='Resolved').length, prog=rows.filter(s=>s.status==='In Progress').length;
  const totalCost=rows.reduce((sum,s)=>sum+(s.cost||0),0);
  const fmtCost=totalCost>=100000?`₹${(totalCost/100000).toFixed(1)}L`:totalCost>=1000?`₹${(totalCost/1000).toFixed(1)}K`:`₹${totalCost}`;
  document.getElementById('svc-stats').innerHTML=`
    <div class="stat"><div class="stat-ic ic-rd">🔴</div><div><div class="stat-v">${open}</div><div class="stat-l">Open Issues</div></div></div>
    <div class="stat"><div class="stat-ic ic-am">🔄</div><div><div class="stat-v">${prog}</div><div class="stat-l">In Progress</div></div></div>
    <div class="stat"><div class="stat-ic ic-gr">✅</div><div><div class="stat-v">${resolved}</div><div class="stat-l">Resolved</div></div></div>
    <div class="stat"><div class="stat-ic" style="background:linear-gradient(135deg,#fce7f3,#ede9fe)">💰</div><div><div class="stat-v" style="font-size:22px">${fmtCost}</div><div class="stat-l">Total Service Cost</div></div></div>`;
  const body=document.getElementById('sv-body');
  if(!rows.length){body.innerHTML=`<tr><td colspan="12" style="text-align:center;padding:32px;color:var(--muted)">No service logs found</td></tr>`;return}
  body.innerHTML=rows.map(s=>{
    const sc=s.status==='Resolved'?'bg':s.status==='In Progress'?'ba':'br';
    const costDisplay=s.cost>0?`<span style="font-weight:700;color:#7c3aed">₹${s.cost.toLocaleString('en-IN')}</span>`:`<span style="color:var(--muted);font-size:11px">—</span>`;
    return `<tr>
      <td style="white-space:nowrap;font-size:11px">${fmtD(s.issueDate)}</td>
      <td><b>${s.city}</b></td>
      <td style="font-size:12px;max-width:140px">${s.store}</td>
      <td style="font-size:11px">${s.dvr||'—'}</td>
      <td style="font-size:11px">${s.issueType}</td>
      <td style="font-size:11px">${s.workDone||'—'}</td>
      <td style="font-size:11px">${s.vendor||'—'}</td>
      <td style="font-size:11px;max-width:110px">${s.vendorResp||'—'}</td>
      <td style="font-size:11px">${s.verifiedBy||'—'}</td>
      <td>${costDisplay}</td>
      <td><span class="badge ${sc}">${s.status}</span></td>
      <td>
        <div class="action-btns">
          <button class="ab" onclick="editSvc('${s.id}')" title="Edit">✏️</button>
          <button class="ab" onclick="markResolved('${s.id}')" title="Mark Resolved">✅</button>
          <button class="ab del" onclick="delSvc('${s.id}')" title="Delete">🗑️</button>
        </div>
      </td>
    </tr>`
  }).join('');
}
async function markResolved(id){
  try{
    await SB.update('service_logs',id,{status:'Resolved'});
    const s=DB.services.find(x=>x.id===id); if(s)s.status='Resolved';
    renderService();updateBadges();showToast('Marked Resolved ✓','green');
  }catch(e){showToast('Update failed','red')}
}
async function delSvc(id){
  if(!confirm('Delete this service entry?'))return;
  try{await SB.delete('service_logs',id);DB.services=DB.services.filter(s=>s.id!==id);renderService();updateBadges();showToast('Deleted','green')}
  catch(e){showToast('Delete failed','red')}
}

// ======================================================
// ACCESS CONTROL — Table view with Edit/Delete
// ======================================================
let editAccId=null;
function openAccModal(city='',brand='',store=''){
  editAccId=null;
  document.getElementById('acc-modal-title').textContent='🔑 Add Access Entry';
  document.getElementById('ac-city-in').value=city;
  document.getElementById('ac-brand-in').value=brand;
  document.getElementById('ac-store-in').value=store;
  document.getElementById('ac-name-in').value='';
  document.getElementById('ac-email-in').value='';
  document.getElementById('ac-role-in').value='';
  const dl1=document.getElementById('dl-ac-city');
  dl1.innerHTML=getCities().map(c=>`<option value="${c}">`).join('');
  const dl2=document.getElementById('dl-ac-store');
  dl2.innerHTML=DB.stores.map(s=>`<option value="${s.name}">`).join('');
  openOv('ov-acc');
}
function openAccModalForStore(city,brand,store){
  openAccModal(city,brand,store);
}
function editAccess(id){
  const a=DB.access.find(x=>x.id===id); if(!a)return;
  editAccId=id;
  document.getElementById('acc-modal-title').textContent='✏️ Edit Access Entry';
  document.getElementById('ac-city-in').value=a.city||'';
  document.getElementById('ac-brand-in').value=a.brand||'';
  document.getElementById('ac-store-in').value=a.store_name||a.store||'';
  document.getElementById('ac-name-in').value=a.person_name||'';
  document.getElementById('ac-email-in').value=a.email||'';
  document.getElementById('ac-role-in').value=a.role||'';
  const dl1=document.getElementById('dl-ac-city');
  dl1.innerHTML=getCities().map(c=>`<option value="${c}">`).join('');
  const dl2=document.getElementById('dl-ac-store');
  dl2.innerHTML=DB.stores.map(s=>`<option value="${s.name}">`).join('');
  openOv('ov-acc');
}
async function saveAccess(){
  const city=document.getElementById('ac-city-in').value.trim();
  const store=document.getElementById('ac-store-in').value.trim();
  const email=document.getElementById('ac-email-in').value.trim();
  if(!city||!store||!email){showToast('City, Store and Email required','red');return}
  const data={city,brand:document.getElementById('ac-brand-in').value.trim(),store_name:store,person_name:document.getElementById('ac-name-in').value.trim()||nameFromEmail(email),email,role:document.getElementById('ac-role-in').value.trim()};
  try{
    if(editAccId){
      const [updated]=await SB.update('access_control',editAccId,data);
      const idx=DB.access.findIndex(a=>a.id===editAccId);
      if(idx>=0)DB.access[idx]={...(updated||{...data,id:editAccId}),store:store};
    } else {
      const [created]=await SB.insert('access_control',data);
      DB.access.push({...created,store:created.store_name||store});
    }
    closeOv('ov-acc');renderAccess();showToast('Access entry saved ✓','green');
  }catch(e){showToast('Save failed: '+e.message,'red')}
}
async function delAccess(id){
  if(!confirm('Remove this access entry?'))return;
  try{await SB.delete('access_control',id);DB.access=DB.access.filter(a=>a.id!==id);renderAccess();showToast('Removed','green')}
  catch(e){showToast('Delete failed','red')}
}
function renderAccess(){
  const q=document.getElementById('ac-q').value.toLowerCase();
  const cf=document.getElementById('ac-city').value;
  const bf=document.getElementById('ac-brand').value;

  // Filter individual rows first
  const filtered=DB.access.filter(a=>
    (!cf||a.city===cf)&&(!bf||a.brand===bf)&&
    ((a.store_name||a.store||'')+(a.email||'')+(a.person_name||'')+(a.city||'')).toLowerCase().includes(q)
  );

  // Group by city+store key
  const groups={};
  filtered.forEach(a=>{
    const storeName=a.store_name||a.store||'';
    const key=`${a.city}||${storeName}`;
    if(!groups[key]){
      groups[key]={city:a.city,brand:a.brand,store:storeName,people:[]};
    }
    groups[key].people.push(a);
  });

  const groupArr=Object.values(groups).sort((a,b)=>{
    if(a.city!==b.city)return a.city.localeCompare(b.city);
    return a.store.localeCompare(b.store);
  });

  // Stats
  const totalStores=groupArr.length;
  const totalPeople=filtered.length;
  const cities=[...new Set(filtered.map(a=>a.city).filter(Boolean))].length;
  const avgPerStore=totalStores?Math.round(totalPeople/totalStores*10)/10:0;

  // Render stats if element exists
  const statsEl=document.getElementById('acc-stats');
  if(statsEl) statsEl.innerHTML=`
    <div class="stat"><div class="stat-ic ic-bl">🏪</div><div><div class="stat-v">${totalStores}</div><div class="stat-l">Stores with Access</div></div></div>
    <div class="stat"><div class="stat-ic ic-gr">👥</div><div><div class="stat-v">${totalPeople}</div><div class="stat-l">Total Access Entries</div></div></div>
    <div class="stat"><div class="stat-ic ic-pu">📍</div><div><div class="stat-v">${cities}</div><div class="stat-l">Cities</div></div></div>
    <div class="stat"><div class="stat-ic ic-am">📊</div><div><div class="stat-v">${avgPerStore}</div><div class="stat-l">Avg per Store</div></div></div>`;

  const body=document.getElementById('ac-body');
  if(!groupArr.length){
    body.innerHTML=`<div style="grid-column:1/-1;text-align:center;padding:48px;color:var(--muted)">No access entries found</div>`;
    return;
  }

  const avatarColors=['av-colors','av-colors2','av-colors3'];
  // Gradient palette per city
  const cityGrads={};
  const grads=[
    'linear-gradient(135deg,#1e40af,#0ea5e9)',
    'linear-gradient(135deg,#059669,#0ea5e9)',
    'linear-gradient(135deg,#7c3aed,#2563eb)',
    'linear-gradient(135deg,#d97706,#059669)',
    'linear-gradient(135deg,#db2777,#7c3aed)',
    'linear-gradient(135deg,#0d9488,#2563eb)',
    'linear-gradient(135deg,#dc2626,#d97706)',
    'linear-gradient(135deg,#1e40af,#7c3aed)',
  ];
  let gradIdx=0;
  function cityGrad(city){
    if(!cityGrads[city]){cityGrads[city]=grads[gradIdx%grads.length];gradIdx++}
    return cityGrads[city];
  }

  body.innerHTML=groupArr.map(g=>{
    const grad=cityGrad(g.city);
    const peopleHTML=g.people.map((a,i)=>{
      const name=a.person_name||nameFromEmail(a.email||'');
      const initials=name.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();
      const col=avatarColors[i%3];
      return `<div class="acc-person-row">
        <div class="av ${col}" style="width:32px;height:32px;font-size:11px;flex-shrink:0">${initials}</div>
        <div class="acc-person-info">
          <div class="acc-person-name">${name}</div>
          <div class="acc-person-email">${a.email||'—'}</div>
        </div>
        <div class="acc-row-actions">
          <button class="ab" onclick="editAccess('${a.id}')" title="Edit">✏️</button>
          <button class="ab del" onclick="delAccess('${a.id}')" title="Remove">🗑️</button>
        </div>
      </div>`;
    }).join('');

    return `<div class="acc-card">
      <div class="acc-card-head" style="background:${grad}">
        <div class="acc-card-store">${g.store||'Unknown Store'}</div>
        <div class="acc-card-meta">📍 ${g.city}${g.brand?` · ${g.brand}`:''}</div>
        <div class="acc-card-badges">
          <span class="acc-badge-count">👥 ${g.people.length} access holder${g.people.length!==1?'s':''}</span>
        </div>
      </div>
      <div class="acc-card-body">
        ${peopleHTML}
        <button class="acc-add-btn" onclick="openAccModalForStore('${g.city}','${g.brand||''}','${g.store.replace(/'/g,"\\'")}')">
          ＋ Add person to this store
        </button>
      </div>
    </div>`;
  }).join('');
}

// ======================================================
// MONITORING
// ======================================================
let editMonId=null;
function openMonModal(){
  editMonId=null;
  document.getElementById('mon-modal-title').textContent='📊 Add Monitoring Entry';
  document.getElementById('mn-dt-in').value=today();
  document.getElementById('mn-nw-in').value='0';
  ['mn-ch-in','mn-cam-in','mn-rm-in'].forEach(id=>document.getElementById(id).value='');
  document.getElementById('mn-ds-in').value='working';
  document.getElementById('mn-it-in').value='';
  document.getElementById('mn-cv-in').value='Clear';
  const el=document.getElementById('mn-c-in');
  el.innerHTML=`<option value="">Select City</option>`+getCities().map(c=>`<option>${c}</option>`).join('');
  document.getElementById('mn-s-in').innerHTML=`<option value="">Select Store</option>`;
  openOv('ov-mon');
}
function editMon(id){
  const m=DB.monitoring.find(x=>x.id===id); if(!m)return;
  editMonId=id;
  document.getElementById('mon-modal-title').textContent='✏️ Edit Monitoring Entry';
  const el=document.getElementById('mn-c-in');
  el.innerHTML=`<option value="">Select City</option>`+getCities().map(c=>`<option${c===m.city?' selected':''}>${c}</option>`).join('');
  populateMonStores(m.store||m.store_name);
  document.getElementById('mn-ds-in').value=m.dvrStatus||'working';
  document.getElementById('mn-it-in').value=m.issueType||'';
  document.getElementById('mn-cv-in').value=m.camVision||'Clear';
  document.getElementById('mn-dt-in').value=m.checkDate||'';
  document.getElementById('mn-ch-in').value=m.channel||'';
  document.getElementById('mn-cam-in').value=m.camCount||0;
  document.getElementById('mn-nw-in').value=m.notWorking||0;
  document.getElementById('mn-rm-in').value=m.remarks||'';
  openOv('ov-mon');
}
function populateMonStores(selectVal=''){
  const city=document.getElementById('mn-c-in').value;
  document.getElementById('mn-s-in').innerHTML=`<option value="">Select Store</option>`+DB.stores.filter(s=>s.city===city).map(s=>`<option${s.name===selectVal?' selected':''}>${s.name}</option>`).join('');
}
async function saveMon(){
  const city=document.getElementById('mn-c-in').value;
  const store=document.getElementById('mn-s-in').value;
  if(!city||!store){showToast('City and Store required','red');return}
  const data={city,store_name:store,dvr_status:document.getElementById('mn-ds-in').value,issue_type:document.getElementById('mn-it-in').value,cam_vision:document.getElementById('mn-cv-in').value,check_date:document.getElementById('mn-dt-in').value,channel:parseInt(document.getElementById('mn-ch-in').value)||null,cam_count:parseInt(document.getElementById('mn-cam-in').value)||0,not_working:parseInt(document.getElementById('mn-nw-in').value)||0,remarks:document.getElementById('mn-rm-in').value};
  try{
    if(editMonId){
      const [updated]=await SB.update('monitoring',editMonId,data);
      const idx=DB.monitoring.findIndex(m=>m.id===editMonId);
      if(idx>=0)DB.monitoring[idx]=mapMonitoring(updated||{...data,id:editMonId});
    } else {
      const [created]=await SB.insert('monitoring',data);
      DB.monitoring.unshift(mapMonitoring(created));
    }
    closeOv('ov-mon');renderMonitor();updateBadges();showToast('Entry saved ✓','green');
  }catch(e){showToast('Save failed: '+e.message,'red')}
}
async function delMon(id){
  if(!confirm('Delete this monitoring entry?'))return;
  try{await SB.delete('monitoring',id);DB.monitoring=DB.monitoring.filter(m=>m.id!==id);renderMonitor();updateBadges();showToast('Deleted','green')}
  catch(e){showToast('Delete failed','red')}
}
function renderMonitor(){
  const q=document.getElementById('mn-q').value.toLowerCase();
  const cf=document.getElementById('mn-city').value;
  const sf=document.getElementById('mn-status').value;
  const rows=DB.monitoring.filter(m=>(!cf||m.city===cf)&&(!sf||m.dvrStatus===sf)&&((m.store||m.store_name||'')+m.city).toLowerCase().includes(q));
  const w=DB.monitoring.filter(m=>m.dvrStatus==='working').length;
  const is=DB.monitoring.filter(m=>m.dvrStatus==='Issue').length;
  const cl=DB.monitoring.filter(m=>m.dvrStatus==='Store Closed').length;
  const na=DB.monitoring.filter(m=>m.dvrStatus==='Not accessible').length;
  document.getElementById('mon-stats').innerHTML=`
    <div class="stat"><div class="stat-ic ic-gr">✅</div><div><div class="stat-v">${w}</div><div class="stat-l">Working</div></div></div>
    <div class="stat"><div class="stat-ic ic-rd">⚠️</div><div><div class="stat-v">${is}</div><div class="stat-l">Issues</div></div></div>
    <div class="stat"><div class="stat-ic ic-am">🔒</div><div><div class="stat-v">${cl}</div><div class="stat-l">Store Closed</div></div></div>
    <div class="stat"><div class="stat-ic ic-pu">🚫</div><div><div class="stat-v">${na}</div><div class="stat-l">Not Accessible</div></div></div>`;
  const body=document.getElementById('mn-body');
  if(!rows.length){body.innerHTML=`<tr><td colspan="11" style="text-align:center;padding:32px;color:var(--muted)">No data</td></tr>`;return}
  body.innerHTML=rows.map(m=>{
    const dc=m.dvrStatus==='working'?'dg':m.dvrStatus==='Issue'?'dr':m.dvrStatus==='Store Closed'?'dx':'da';
    const bc=m.dvrStatus==='working'?'bg':m.dvrStatus==='Issue'?'br':m.dvrStatus==='Store Closed'?'bx':'ba';
    return `<tr>
      <td><b>${m.city}</b></td>
      <td style="font-size:12px;max-width:170px">${m.store||m.store_name||'—'}</td>
      <td><span class="badge ${bc}"><span class="dot ${dc}"></span>${m.dvrStatus}</span></td>
      <td style="font-size:11px">${m.issueType||'—'}</td>
      <td><span class="badge ${m.camVision==='Clear'?'bg':'ba'}">${m.camVision}</span></td>
      <td style="font-size:11px;white-space:nowrap">${fmtD(m.checkDate)}</td>
      <td style="text-align:center">${m.channel||'—'}</td>
      <td style="text-align:center;font-weight:600">${m.camCount||0}</td>
      <td style="text-align:center">${parseInt(m.notWorking)>0?`<span class="badge br">${m.notWorking}</span>`:`<span style="color:var(--green);font-weight:700">0</span>`}</td>
      <td style="font-size:11px;color:var(--muted);max-width:130px">${m.remarks&&m.remarks!=='NA'?m.remarks:'—'}</td>
      <td>
        <div class="action-btns">
          <button class="ab" onclick="editMon('${m.id}')" title="Edit">✏️</button>
          <button class="ab del" onclick="delMon('${m.id}')" title="Delete">🗑️</button>
        </div>
      </td>
    </tr>`
  }).join('');
}

// ======================================================
// DOWNLOAD REPORT
// ======================================================
function downloadReport(){
  const cf=document.getElementById('mn-city').value, sf=document.getElementById('mn-status').value;
  const all=DB.monitoring.filter(m=>(!cf||m.city===cf)&&(!sf||m.dvrStatus===sf));
  const working=all.filter(m=>m.dvrStatus==='working'), issues=all.filter(m=>m.dvrStatus==='Issue');
  const closed=all.filter(m=>m.dvrStatus==='Store Closed'), na=all.filter(m=>m.dvrStatus==='Not accessible');
  const cityBreakdown={};
  all.forEach(m=>{if(!cityBreakdown[m.city])cityBreakdown[m.city]={w:0,i:0,c:0,n:0};const k=m.dvrStatus==='working'?'w':m.dvrStatus==='Issue'?'i':m.dvrStatus==='Store Closed'?'c':'n';cityBreakdown[m.city][k]++});
  const issueByType={};
  issues.forEach(m=>{const k=m.issueType||'Unknown';issueByType[k]=(issueByType[k]||0)+1});
  const totalCities=[...new Set(all.map(m=>m.city))].length;
  const rdate='15 March 2026';
  const fD=d=>{try{return new Date(d).toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'})}catch(e){return d||'—'}};
  const pct=(n,t)=>t>0?Math.round(n/t*100):0;
  const statusBadge=st=>{
    if(st==='working')return`<span style="background:#d1fae5;color:#065f46;padding:3px 10px;border-radius:20px;font-size:11px;font-weight:700">✅ Working</span>`;
    if(st==='Issue')return`<span style="background:#fee2e2;color:#991b1b;padding:3px 10px;border-radius:20px;font-size:11px;font-weight:700">⚠️ Issue</span>`;
    if(st==='Store Closed')return`<span style="background:#f1f5f9;color:#334155;padding:3px 10px;border-radius:20px;font-size:11px;font-weight:700">🔒 Closed</span>`;
    return`<span style="background:#fef3c7;color:#78350f;padding:3px 10px;border-radius:20px;font-size:11px;font-weight:700">🚫 N/A</span>`;
  };
  const html=`<!DOCTYPE html><html><head><meta charset="UTF-8"><title>CCTV Report ${rdate}</title>
  <style>*{box-sizing:border-box;margin:0;padding:0}body{font-family:Arial,sans-serif;background:#f0f4ff;padding:24px;color:#0f172a}
  .wrap{max-width:1100px;margin:0 auto}.header{background:linear-gradient(135deg,#0f172a,#1e3a8a);border-radius:16px;padding:28px 32px;color:#fff;margin-bottom:24px}
  .h-title{font-size:24px;font-weight:800;margin-bottom:8px}.h-meta{font-size:12px;color:rgba(255,255,255,.7);display:flex;gap:20px;flex-wrap:wrap}
  .kpi-row{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:24px}
  .kpi{border-radius:12px;padding:18px;border:1px solid #e0e7ff;background:#fff}.kpi-num{font-size:32px;font-weight:800;line-height:1}.kpi-label{font-size:12px;font-weight:600;margin-top:4px;opacity:.7}
  .kpi-w .kpi-num{color:#059669}.kpi-i .kpi-num{color:#dc2626}.kpi-c .kpi-num{color:#334155}.kpi-n .kpi-num{color:#d97706}
  .section{background:#fff;border-radius:12px;border:1px solid #e0e7ff;margin-bottom:20px;overflow:hidden}
  .sec-head{padding:14px 20px;border-bottom:1px solid #e0e7ff;font-size:14px;font-weight:800}
  table{width:100%;border-collapse:collapse;font-size:12px}
  th{padding:9px 14px;text-align:left;font-size:10px;font-weight:800;letter-spacing:.7px;text-transform:uppercase;background:#1e293b;color:rgba(255,255,255,.8)}
  td{padding:9px 14px;border-bottom:1px solid #f1f5f9}
  .footer{text-align:center;padding:16px;font-size:11px;color:#94a3b8;margin-top:8px}
  @media print{body{background:#fff;padding:8px}.no-print{display:none}}
  </style></head><body><div class="wrap">
  <div class="header"><div class="h-title">📹 CCTV Visibility Report — Pan India</div>
  <div class="h-meta"><span>📅 ${rdate}</span><span>👤 Manish</span><span>🏪 ${all.length} stores</span><span>🗺️ ${totalCities} cities</span>${cf?`<span>🔍 ${cf}</span>`:''}</div>
  <button class="no-print" onclick="window.print()" style="margin-top:12px;background:rgba(255,255,255,.2);border:1px solid rgba(255,255,255,.3);color:#fff;padding:7px 16px;border-radius:8px;cursor:pointer;font-size:12px">🖨️ Print / PDF</button></div>
  <div class="kpi-row">
  <div class="kpi kpi-w"><div class="kpi-num">${working.length}</div><div class="kpi-label">✅ Working (${pct(working.length,all.length)}%)</div></div>
  <div class="kpi kpi-i"><div class="kpi-num">${issues.length}</div><div class="kpi-label">⚠️ Issues (${pct(issues.length,all.length)}%)</div></div>
  <div class="kpi kpi-c"><div class="kpi-num">${closed.length}</div><div class="kpi-label">🔒 Closed (${pct(closed.length,all.length)}%)</div></div>
  <div class="kpi kpi-n"><div class="kpi-num">${na.length}</div><div class="kpi-label">🚫 N/A (${pct(na.length,all.length)}%)</div></div>
  </div>
  ${issues.length?`<div class="section"><div class="sec-head">⚠️ Active Issues (${issues.length})</div><table><thead><tr><th>#</th><th>City</th><th>Store</th><th>Issue Type</th><th>Check Date</th><th>Cams</th><th>Remarks</th></tr></thead><tbody>${issues.map((m,i)=>`<tr><td>${i+1}</td><td><b>${m.city}</b></td><td>${m.store||m.store_name}</td><td>${m.issueType||'—'}</td><td>${fD(m.checkDate)}</td><td>${m.camCount||0}</td><td>${m.remarks&&m.remarks!=='NA'?m.remarks:'—'}</td></tr>`).join('')}</tbody></table></div>`:''}
  <div class="section"><div class="sec-head">🗺️ City Summary</div><table><thead><tr><th>City</th><th>✅ Working</th><th>⚠️ Issue</th><th>🔒 Closed</th><th>🚫 N/A</th><th>Total</th></tr></thead><tbody>${Object.entries(cityBreakdown).sort().map(([city,d])=>{const tot=(d.w||0)+(d.i||0)+(d.c||0)+(d.n||0);return`<tr><td><b>${city}</b></td><td style="color:#059669;font-weight:700">${d.w||0}</td><td style="color:${d.i?'#dc2626':'#cbd5e1'};font-weight:${d.i?700:400}">${d.i||0}</td><td>${d.c||0}</td><td>${d.n||0}</td><td><b>${tot}</b></td></tr>`}).join('')}</tbody></table></div>
  <div class="section"><div class="sec-head">📋 All Stores (${all.length})</div><table><thead><tr><th>#</th><th>City</th><th>Store</th><th>Status</th><th>Issue Type</th><th>Vision</th><th>Ch</th><th>Cams</th><th>Check Date</th><th>Remarks</th></tr></thead><tbody>${all.map((m,i)=>`<tr><td>${i+1}</td><td><b>${m.city}</b></td><td>${m.store||m.store_name}</td><td>${statusBadge(m.dvrStatus)}</td><td style="font-size:11px">${m.issueType||'—'}</td><td>${m.camVision}</td><td>${m.channel||'—'}</td><td><b>${m.camCount||0}</b></td><td style="white-space:nowrap">${fD(m.checkDate)}</td><td style="font-size:11px">${m.remarks&&m.remarks!=='NA'?m.remarks:'—'}</td></tr>`).join('')}</tbody></table></div>
  <div class="footer">CCTV Shield — Pan India Manager &nbsp;·&nbsp; ${rdate} &nbsp;·&nbsp; Prepared by Manish</div>
  </div></body></html>`;
  const blob=new Blob([html],{type:'text/html;charset=utf-8'});
  const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`CCTV_Report_${rdate.replace(/ /g,'_')}.html`;a.click();
  showToast('Report downloaded ✓','green');
}

// ======================================================
// INIT
// ======================================================
function showLoader(v){
  let el=document.getElementById('app-loader');
  if(!el){
    el=document.createElement('div');el.id='app-loader';
    el.style.cssText='position:fixed;inset:0;z-index:9999;background:linear-gradient(135deg,rgba(15,23,42,.85),rgba(30,64,175,.7));display:flex;align-items:center;justify-content:center;backdrop-filter:blur(8px)';
    el.innerHTML=`<div style="background:#fff;border-radius:20px;padding:36px 44px;text-align:center;box-shadow:0 32px 80px rgba(15,23,42,.35);max-width:320px;width:90%">
      <div style="font-size:44px;margin-bottom:16px;animation:spin 1.5s linear infinite;display:inline-block">📡</div>
      <div style="font-family:'Syne',sans-serif;font-weight:800;font-size:18px;color:#0f172a;margin-bottom:6px">CCTV Shield</div>
      <div style="font-size:13px;color:#64748b;margin-bottom:18px">Connecting to Supabase…</div>
      <div style="height:4px;background:#e0e7ff;border-radius:4px;overflow:hidden"><div id="loader-bar" style="height:100%;width:0%;background:linear-gradient(to right,#2563eb,#0ea5e9);border-radius:4px;transition:width .4s ease"></div></div>
      <div id="loader-status" style="font-size:11px;color:#94a3b8;margin-top:8px">Initialising…</div>
    </div><style>@keyframes spin{to{transform:rotate(360deg)}}</style>`;
    document.body.appendChild(el);
  }
  el.style.display=v?'flex':'none';
}
function setLoaderProgress(pct,msg){
  const bar=document.getElementById('loader-bar'), txt=document.getElementById('loader-status');
  if(bar)bar.style.width=pct+'%'; if(txt)txt.textContent=msg;
}
async function loadAll(){
  showLoader(true);
  try{
    setLoaderProgress(10,'Loading stores…');
    const stores=await SB.get('stores','select=*&order=city,name');
    setLoaderProgress(35,'Loading monitoring…');
    const monitoring=await SB.get('monitoring','select=*&order=check_date.desc');
    setLoaderProgress(60,'Loading service logs…');
    const services=await SB.get('service_logs','select=*&order=issue_date.desc');
    setLoaderProgress(80,'Loading access control…');
    const access=await SB.get('access_control','select=*&order=city,store_name,person_name');
    setLoaderProgress(95,'Rendering…');
    DB.stores=(stores||[]).map(mapStore);
    DB.monitoring=(monitoring||[]).map(mapMonitoring);
    DB.services=(services||[]).map(mapService);
    DB.access=(access||[]).map(r=>({...r,store:r.store_name||''}));
    setLoaderProgress(100,'Done!');
    setTimeout(()=>{showLoader(false);updateBadges();nav('master')},300);
  }catch(err){
    console.error(err);
    setLoaderProgress(100,'Failed to connect');
    const txt=document.getElementById('loader-status');
    if(txt)txt.style.color='#dc2626';
    showToast('⚠️ Could not load data','red');
    setTimeout(()=>{showLoader(false);updateBadges();nav('master')},2000);
  }
}
loadAll();
</script>
</body>
</html>
