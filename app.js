/* ============================================================
   MK CAFÉ — WEB EDITION
   app.js
   ============================================================ */

/* ============================================================
   DATA — PRODUCT CATALOG
   ============================================================ */
const IMG = {
  espresso:      'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=700&q=80&auto=format&fit=crop',
  cappuccino:    'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=700&q=80&auto=format&fit=crop',
  latte:         'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=700&q=80&auto=format&fit=crop',
  americano:     'https://images.unsplash.com/photo-1551030173-122aabc4489c?w=700&q=80&auto=format&fit=crop',
  mocha:         'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=700&q=80&auto=format&fit=crop',
  flatwhite:     'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=700&q=80&auto=format&fit=crop',
  icedlatte:     'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=700&q=80&auto=format&fit=crop',
  icedmocha:     'https://images.unsplash.com/photo-1592663527359-cf6642f54cff?w=700&q=80&auto=format&fit=crop',
  frappe:        'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=700&q=80&auto=format&fit=crop',
  spanish:       'https://images.unsplash.com/photo-1587080413959-06b859fb107d?w=700&q=80&auto=format&fit=crop',
  tea:           'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=700&q=80&auto=format&fit=crop',
  greentea:      'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=700&q=80&auto=format&fit=crop',
  karak:         'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=700&q=80&auto=format&fit=crop',
  cheesecake:    'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=700&q=80&auto=format&fit=crop',
  brownie:       'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=700&q=80&auto=format&fit=crop',
  cookie:        'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=700&q=80&auto=format&fit=crop',
  croissant:     'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=700&q=80&auto=format&fit=crop',
  mango:         'https://images.unsplash.com/photo-1546173159-315724a31696?w=700&q=80&auto=format&fit=crop',
  strawberry:    'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=700&q=80&auto=format&fit=crop',
  orange:        'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=700&q=80&auto=format&fit=crop',
  lemonmint:     'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?w=700&q=80&auto=format&fit=crop',
  signature:     'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=700&q=80&auto=format&fit=crop',
  caramelcloud:  'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=700&q=80&auto=format&fit=crop',
  mkspecial:     'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=700&q=80&auto=format&fit=crop'
};

const FALLBACK = 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=700&q=80&auto=format&fit=crop';

const CATEGORIES = [
  { id:'coffee',   name:'القهوة',          emoji:'☕',   desc:'ساخنة ومختصة' },
  { id:'cold',     name:'المشروبات الباردة', emoji:'🧊', desc:'منعشة وباردة' },
  { id:'tea',      name:'الشاي',            emoji:'🍵',   desc:'كلاسيكي ومميز' },
  { id:'desserts', name:'الحلويات',          emoji:'🍰',   desc:'طازجة يومياً' },
  { id:'juices',   name:'العصائر',           emoji:'🥤',   desc:'طبيعية 100%' },
  { id:'special',  name:'المشروبات الخاصة',  emoji:'⭐',   desc:'توقيع MK Café' }
];

const EXTRAS = [
  { id:'milk',       name:'إضافة حليب',        price:10 },
  { id:'espresso',   name:'إضافة شوت إسبريسو', price:15 },
  { id:'caramel',    name:'كراميل',            price:12 },
  { id:'vanilla',    name:'فانيليا',           price:12 },
  { id:'cream',      name:'كريمة',             price:8  }
];

const SIZES = [
  { id:'small',  name:'صغير',   delta:0  },
  { id:'medium', name:'وسط',    delta:10 },
  { id:'large',  name:'كبير',   delta:20 }
];

const PRODUCTS = [
  /* القهوة */
  { id:'esp01', name:'إسبريسو', englishName:'Espresso', category:'coffee', price:35, rating:4.8, popular:true,
    image:IMG.espresso, description:'شوت إسبريسو مركّز من أجود حبوب البن المحمّصة بعناية.', extras:['espresso'], sizes:['small'] },
  { id:'cap01', name:'كابتشينو', englishName:'Cappuccino', category:'coffee', price:55, rating:4.9, popular:true,
    image:IMG.cappuccino, description:'إسبريسو غني مع رغوة حليب حريرية ولمسة من الكاكاو.', extras:['milk','espresso','cream'], sizes:['small','medium','large'] },
  { id:'lat01', name:'لاتيه', englishName:'Latte', category:'coffee', price:60, rating:4.9, popular:true,
    image:IMG.latte, description:'إسبريسو ناعم مع حليب مبخّر ورغوة خفيفة كريمية.', extras:['milk','espresso','caramel','vanilla'], sizes:['small','medium','large'] },
  { id:'ame01', name:'أمريكانو', englishName:'Americano', category:'coffee', price:45, rating:4.6,
    image:IMG.americano, description:'إسبريسو مع ماء ساخن، نكهة قوية ومتوازنة.', extras:['espresso'], sizes:['small','medium','large'] },
  { id:'moc01', name:'موكا', englishName:'Mocha', category:'coffee', price:65, rating:4.8, popular:true,
    image:IMG.mocha, description:'إسبريسو مع شوكولاتة داكنة وحليب مبخّر وكريمة.', extras:['milk','espresso','cream','caramel'], sizes:['small','medium','large'] },
  { id:'flw01', name:'فلات وايت', englishName:'Flat White', category:'coffee', price:62, rating:4.7,
    image:IMG.flatwhite, description:'إسبريسو مزدوج مع حليب مخملي ناعم بلمسة فنية.', extras:['milk','espresso'], sizes:['small','medium'] },

  /* المشروبات الباردة */
  { id:'iclat01', name:'آيس لاتيه', englishName:'Iced Latte', category:'cold', price:65, rating:4.8, popular:true,
    image:IMG.icedlatte, description:'إسبريسو مثلج مع حليب بارد وثلج منعش.', extras:['milk','espresso','vanilla','caramel'], sizes:['medium','large'] },
  { id:'icmoc01', name:'آيس موكا', englishName:'Iced Mocha', category:'cold', price:70, rating:4.7,
    image:IMG.icedmocha, description:'موكا مثلج مع شوكولاتة وكريمة مخفوقة.', extras:['milk','cream','caramel'], sizes:['medium','large'] },
  { id:'frap01', name:'فرابتشينو', englishName:'Frappuccino', category:'cold', price:75, rating:4.9, popular:true,
    image:IMG.frappe, description:'مشروب مثلج كريمي مخفوق مع كريمة وشراب الكراميل.', extras:['cream','caramel','vanilla'], sizes:['medium','large'] },
  { id:'spa01', name:'آيس سبانيش لاتيه', englishName:'Iced Spanish Latte', category:'cold', price:72, rating:4.8,
    image:IMG.spanish, description:'لاتيه مثلج بالحليب المكثّف المحلّى، حلو وكريمي.', extras:['milk','espresso','vanilla'], sizes:['medium','large'] },

  /* الشاي */
  { id:'tea01', name:'شاي بالنعناع', englishName:'Mint Tea', category:'tea', price:35, rating:4.7, popular:true,
    image:IMG.tea, description:'شاي أسود منعش مع أوراق نعناع طازجة.', extras:['vanilla'], sizes:['small','medium','large'] },
  { id:'tea02', name:'شاي أخضر', englishName:'Green Tea', category:'tea', price:35, rating:4.5,
    image:IMG.greentea, description:'شاي أخضر نقي غني بمضادات الأكسدة.', extras:[], sizes:['small','medium','large'] },
  { id:'tea03', name:'شاي كرك', englishName:'Karak Tea', category:'tea', price:40, rating:4.8,
    image:IMG.karak, description:'شاي كرك بالحليب والهيل بنكهة خليجية أصيلة.', extras:['milk','vanilla'], sizes:['small','medium'] },

  /* الحلويات */
  { id:'des01', name:'تشيز كيك', englishName:'Cheesecake', category:'desserts', price:55, rating:4.9, popular:true,
    image:IMG.cheesecake, description:'تشيز كيك نيويورك كريمي بقاعدة بسكويت مقرمشة.', extras:[], sizes:[] },
  { id:'des02', name:'براونيز', englishName:'Brownies', category:'desserts', price:45, rating:4.8,
    image:IMG.brownie, description:'براونيز شوكولاتة غنية وطرية بقطع الشوكولاتة.', extras:[], sizes:[] },
  { id:'des03', name:'كوكيز', englishName:'Cookies', category:'desserts', price:30, rating:4.6,
    image:IMG.cookie, description:'كوكيز شوكولاتة طازج مخبوز يومياً.', extras:[], sizes:[] },
  { id:'des04', name:'كرواسون', englishName:'Croissant', category:'desserts', price:38, rating:4.7,
    image:IMG.croissant, description:'كرواسون فرنسي بالزبدة، مقرمش من الخارج وطري.', extras:[], sizes:[] },

  /* العصائر */
  { id:'jui01', name:'عصير مانجو', englishName:'Mango Juice', category:'juices', price:50, rating:4.8, popular:true,
    image:IMG.mango, description:'عصير مانجو طبيعي 100% بلا سكر مضاف.', extras:[], sizes:['medium','large'] },
  { id:'jui02', name:'عصير فراولة', englishName:'Strawberry Juice', category:'juices', price:50, rating:4.7,
    image:IMG.strawberry, description:'عصير فراولة طازج منعش ومثالي.', extras:[], sizes:['medium','large'] },
  { id:'jui03', name:'عصير برتقال', englishName:'Orange Juice', category:'juices', price:45, rating:4.6,
    image:IMG.orange, description:'عصير برتقال طازج معصور عند الطلب.', extras:[], sizes:['medium','large'] },
  { id:'jui04', name:'ليمون بالنعناع', englishName:'Lemon Mint', category:'juices', price:45, rating:4.7,
    image:IMG.lemonmint, description:'ليمون بالنعناع منعش ومثالي للأجواء الحارة.', extras:[], sizes:['medium','large'] },

  /* المشروبات الخاصة */
  { id:'spc01', name:'سيجنتشر لاتيه', englishName:'Signature Latte', category:'special', price:85, rating:5.0, popular:true,
    image:IMG.signature, description:'لاتيه توقيع MK Café بمزيج خاص من الكراميل والفانيليا.', extras:['milk','espresso','caramel','vanilla','cream'], sizes:['medium','large'] },
  { id:'spc02', name:'كراميل كلاود', englishName:'Caramel Cloud', category:'special', price:80, rating:4.9, popular:true,
    image:IMG.caramelcloud, description:'مشروب كريمي بكراميل غني وكريمة مخفوقة كالغيوم.', extras:['cream','caramel','milk'], sizes:['medium','large'] },
  { id:'spc03', name:'MK Special', englishName:'MK Special', category:'special', price:90, rating:5.0,
    image:IMG.mkspecial, description:'الخلطة السرية من MK Café، تجربة فريدة لا تُنسى.', extras:['milk','espresso','caramel','vanilla','cream'], sizes:['medium','large'] }
];

/* ============================================================
   STATE
   ============================================================ */
const STORAGE = {
  fav:    'mkCafeFavorites',
  cart:   'mkCafeCart',
  orders: 'mkCafeOrders',
  theme:  'mkCafeTheme'
};

const state = {
  view: 'home',
  category: 'all',
  search: '',
  sort: 'default',
  favorites: new Set(),
  cart: [],
  orders: [],
  theme: 'light',
  activeProduct: null,
  productDraft: null,
  checkoutDelivery: 'delivery'
};

/* ============================================================
   UTILITIES
   ============================================================ */
const $  = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];

function safeParse(key, fallback){
  try{
    const raw = localStorage.getItem(key);
    if(!raw) return fallback;
    const val = JSON.parse(raw);
    return val ?? fallback;
  }catch(e){
    console.warn('localStorage parse failed:', key, e);
    return fallback;
  }
}
function save(key, val){
  try{ localStorage.setItem(key, JSON.stringify(val)); }
  catch(e){ console.warn('localStorage save failed:', key, e); }
}
function fmt(n){ return Math.round(n) + ' EGP'; }
function esc(s){ return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }

function getProduct(id){ return PRODUCTS.find(p => p.id === id) || null; }
function getExtra(id){ return EXTRAS.find(e => e.id === id) || null; }
function getSize(id){ return SIZES.find(s => s.id === id) || null; }

function productBasePrice(p, sizeId){
  const base = p.price;
  const size = sizeId ? getSize(sizeId) : null;
  return base + (size ? size.delta : 0);
}
function extrasPrice(extras){
  return extras.reduce((sum, id) => sum + (getExtra(id)?.price || 0), 0);
}
function lineTotal(item){
  const p = getProduct(item.productId);
  if(!p) return 0;
  return (productBasePrice(p, item.size) + extrasPrice(item.extras || [])) * item.qty;
}
function cartCount(){ return state.cart.reduce((s,i)=>s+i.qty,0); }
function cartSubtotal(){ return state.cart.reduce((s,i)=>s+lineTotal(i),0); }
function deliveryFee(){ return state.checkoutDelivery === 'pickup' ? 0 : 30; }
function cartTotal(){ return cartSubtotal() + deliveryFee(); }

function makeCartKey(productId, size, extras){
  return productId + '|' + (size||'') + '|' + [...(extras||[])].sort().join(',');
}

/* ============================================================
   TOASTS
   ============================================================ */
function toast(msg, type='ok'){
  const wrap = $('#toastWrap');
  if(!wrap) return;
  const icons = { ok:'✅', fav:'❤️', rm:'🗑️', err:'⚠️', info:'ℹ️' };
  const el = document.createElement('div');
  el.className = 'toast';
  el.innerHTML = `<span class="ti">${icons[type]||icons.ok}</span><span>${esc(msg)}</span>`;
  wrap.appendChild(el);
  setTimeout(()=>{ el.classList.add('out'); setTimeout(()=>el.remove(), 320); }, 2200);
}

/* ============================================================
   THEME
   ============================================================ */
function applyTheme(theme){
  state.theme = theme;
  if(theme === 'dark') document.documentElement.setAttribute('data-theme','dark');
  else document.documentElement.removeAttribute('data-theme');
  const st = $('#settingTheme'); if(st) st.checked = theme === 'dark';
  const meta = document.querySelector('meta[name="theme-color"]');
  if(meta) meta.setAttribute('content', theme === 'dark' ? '#14100D' : '#FBF6EF');
  save(STORAGE.theme, theme);
}
function toggleTheme(){
  applyTheme(state.theme === 'dark' ? 'light' : 'dark');
  toast(state.theme === 'dark' ? 'تم تفعيل الوضع الليلي 🌙' : 'تم تفعيل الوضع النهاري ☀️', 'info');
}

/* ============================================================
   FAVORITES
   ============================================================ */
function saveFavorites(){ save(STORAGE.fav, [...state.favorites]); }
function isFav(id){ return state.favorites.has(id); }
function toggleFav(id){
  const p = getProduct(id);
  if(!p) return;
  if(state.favorites.has(id)){
    state.favorites.delete(id);
    toast('تمت إزالة المنتج من المفضلة', 'rm');
  } else {
    state.favorites.add(id);
    toast('تمت إضافة المنتج إلى المفضلة ❤️', 'fav');
  }
  saveFavorites();
  renderFavorites();
  renderHome();
  refreshFavButtons();
}

/* ============================================================
   CART
   ============================================================ */
function saveCart(){ save(STORAGE.cart, state.cart); }
function addToCart(productId, size='', extras=[], qty=1){
  const p = getProduct(productId);
  if(!p){ toast('منتج غير متاح', 'err'); return; }
  if(!p.sizes.length) size = '';
  else if(!size) size = p.sizes[0];
  if(qty < 1) qty = 1;
  const key = makeCartKey(productId, size, extras);
  const existing = state.cart.find(i => makeCartKey(i.productId, i.size, i.extras) === key);
  if(existing) existing.qty += qty;
  else state.cart.push({ productId, size, extras:[...extras], qty });
  saveCart();
  updateCartUI();
  toast('تمت إضافة المنتج إلى السلة 🛒', 'ok');
}
function changeQty(key, delta){
  const item = state.cart.find(i => makeCartKey(i.productId, i.size, i.extras) === key);
  if(!item) return;
  item.qty += delta;
  if(item.qty < 1) item.qty = 1;
  saveCart(); updateCartUI();
}
function removeFromCart(key){
  const idx = state.cart.findIndex(i => makeCartKey(i.productId, i.size, i.extras) === key);
  if(idx === -1) return;
  state.cart.splice(idx, 1);
  saveCart(); updateCartUI();
  toast('تم حذف المنتج', 'rm');
}
function clearCart(){
  if(!state.cart.length) return;
  state.cart = [];
  saveCart(); updateCartUI();
  toast('تم إفراغ السلة', 'rm');
}

function updateCartUI(){
  const badge = $('#cartBadge');
  const count = cartCount();
  if(count > 0){ badge.hidden = false; badge.textContent = count > 99 ? '99+' : count; }
  else badge.hidden = true;
  $('#cartCount').textContent = count;
  renderCart();
}

/* ============================================================
   ORDER HISTORY
   ============================================================ */
function saveOrders(){ save(STORAGE.orders, state.orders); }

function generateOrderNumber(){
  let n;
  let tries = 0;
  do{
    n = 'MK' + Math.floor(1000 + Math.random()*9000);
    tries++;
  } while(tries < 20 && state.orders.some(o => o.number === n));
  return '#' + n;
}

function createOrder(customer){
  const number = generateOrderNumber();
  const order = {
    id: 'o_' + Date.now(),
    number,
    date: new Date().toISOString(),
    customer,
    items: state.cart.map(i => {
      const p = getProduct(i.productId);
      return {
        productId: i.productId,
        name: p ? p.name : '—',
        englishName: p ? p.englishName : '',
        size: i.size,
        extras: i.extras,
        qty: i.qty,
        lineTotal: lineTotal(i)
      };
    }),
    subtotal: cartSubtotal(),
    delivery: deliveryFee(),
    total: cartTotal(),
    status: 'preparing',
    prepTime: '25 - 35 دقيقة',
    deliveryType: state.checkoutDelivery,
    payment: customer.payment
  };
  state.orders.unshift(order);
  saveOrders();
  state.cart = []; saveCart(); updateCartUI();
  return order;
}

/* ============================================================
   RENDERING — PRODUCTS
   ============================================================ */
function productCardHTML(p, index=0){
  const fav = isFav(p.id);
  return `
    <article class="product-card" style="animation-delay:${Math.min(index*40,400)}ms" data-pid="${p.id}">
      <div class="product-media" data-open="${p.id}">
        <img src="${p.image}" alt="${esc(p.name)}" loading="lazy"
             onerror="this.onerror=null;this.src='${FALLBACK}'">
        ${p.popular ? '<span class="tag hot">الأكثر شعبية 🔥</span>' : ''}
        <button class="fav-btn ${fav?'active':''}" data-fav="${p.id}" aria-label="المفضلة" aria-pressed="${fav}">
          <svg viewBox="0 0 24 24"><path fill="${fav?'currentColor':'none'}" stroke="currentColor" stroke-width="2" stroke-linejoin="round" d="M12 21s-7-4.5-9.5-9C1 9 3 5 6.5 5 9 5 10.5 7 12 9c1.5-2 3-4 5.5-4C21 5 23 9 21.5 12c-2.5 4.5-9.5 9-9.5 9z"/></svg>
        </button>
      </div>
      <div class="product-body">
        <h3>${esc(p.name)}</h3>
        <span class="desc">${esc(p.description)}</span>
        <div class="product-meta">
          <span class="rating">
            <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/></svg>
            ${p.rating.toFixed(1)}
          </span>
          <span>· ${esc(p.englishName)}</span>
        </div>
        <div class="product-foot">
          <span class="price">${p.price}<small>EGP</small></span>
          <button class="add-btn" data-add="${p.id}" aria-label="أضف للسلة">
            <svg viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" d="M12 5v14M5 12h14"/></svg>
          </button>
        </div>
      </div>
    </article>`;
}

function renderGrid(el, list){
  if(!el) return;
  if(!list.length){ el.innerHTML = ''; return; }
  el.innerHTML = list.map((p,i)=>productCardHTML(p,i)).join('');
}

/* ============================================================
   RENDERING — HOME
   ============================================================ */
function renderHome(){
  const catGrid = $('#homeCategories');
  if(catGrid){
    catGrid.innerHTML = CATEGORIES.map(c => `
      <button class="cat-card" data-cat="${c.id}">
        <span class="cat-emoji">${c.emoji}</span>
        <strong>${c.name}</strong>
        <small>${c.desc}</small>
      </button>`).join('');
  }
  const popular = PRODUCTS.filter(p => p.popular).slice(0,6);
  renderGrid($('#homePopular'), popular);
  const special = PRODUCTS.filter(p => p.category === 'special').slice(0,3);
  renderGrid($('#homeSpecial'), special);
}

/* ============================================================
   RENDERING — MENU
   ============================================================ */
function renderMenuCategories(){
  const el = $('#menuCategories');
  if(!el) return;
  const all = [{id:'all', name:'الكل', emoji:'🍽️'}, ...CATEGORIES];
  el.innerHTML = all.map(c => `
    <button class="chip ${state.category===c.id?'active':''}" data-cat="${c.id}" role="tab">
      ${c.emoji} ${c.name}
    </button>`).join('');
}

function getFilteredProducts(){
  let list = PRODUCTS.slice();
  if(state.category !== 'all') list = list.filter(p => p.category === state.category);
  if(state.search){
    const q = state.search.trim().toLowerCase();
    list = list.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.englishName.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      (CATEGORIES.find(c=>c.id===p.category)?.name || '').includes(q)
    );
  }
  if(state.sort === 'price-asc')  list.sort((a,b)=>a.price-b.price);
  if(state.sort === 'price-desc') list.sort((a,b)=>b.price-a.price);
  if(state.sort === 'rating')     list.sort((a,b)=>b.rating-a.rating);
  return list;
}

function renderMenu(){
  const list = getFilteredProducts();
  const grid = $('#menuGrid');
  const empty = $('#menuEmpty');
  renderGrid(grid, list);
  $('#menuCount').textContent = list.length ? `${list.length} منتج` : '';
  if(empty) empty.hidden = list.length > 0;
}

/* ============================================================
   RENDERING — FAVORITES
   ============================================================ */
function renderFavorites(){
  const list = PRODUCTS.filter(p => state.favorites.has(p.id));
  const grid = $('#favGrid');
  const empty = $('#favEmpty');
  renderGrid(grid, list);
  if(empty) empty.hidden = list.length > 0;
}

function refreshFavButtons(){
  $$('[data-fav]').forEach(btn => {
    const id = btn.dataset.fav;
    const active = isFav(id);
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', active);
    const path = btn.querySelector('path');
    if(path) path.setAttribute('fill', active ? 'currentColor' : 'none');
  });
}

/* ============================================================
   RENDERING — CART
   ============================================================ */
function renderCart(){
  const body = $('#cartBody');
  const foot = $('#cartFoot');
  if(!body) return;

  if(!state.cart.length){
    body.innerHTML = `
      <div class="empty-state">
        <div class="empty-ico">🛒</div>
        <h3>السلة فارغة</h3>
        <p>ابدأ بإضافة مشروبك المفضل</p>
        <button class="btn btn-primary" data-nav="menu" data-close-cart>استعرض المنيو</button>
      </div>`;
    if(foot) foot.hidden = true;
    return;
  }

  body.innerHTML = state.cart.map(item => {
    const p = getProduct(item.productId);
    if(!p) return '';
    const key = makeCartKey(item.productId, item.size, item.extras);
    const sizeName = item.size ? getSize(item.size)?.name : '';
    const extrasNames = (item.extras||[]).map(id => getExtra(id)?.name).filter(Boolean);
    const opts = [sizeName, ...extrasNames].filter(Boolean).join(' • ');
    return `
      <div class="cart-item" data-key="${esc(key)}">
        <div class="cart-item-img">
          <img src="${p.image}" alt="${esc(p.name)}" loading="lazy"
               onerror="this.onerror=null;this.src='${FALLBACK}'">
        </div>
        <div class="cart-item-info">
          <strong>${esc(p.name)}</strong>
          ${opts ? `<span class="opts">${esc(opts)}</span>` : ''}
          <span class="cprice">${fmt(lineTotal(item))}</span>
        </div>
        <div class="cart-item-actions">
          <div class="qty-ctrl">
            <button data-qty="inc" data-key="${esc(key)}" aria-label="زيادة">+</button>
            <span>${item.qty}</span>
            <button data-qty="dec" data-key="${esc(key)}" aria-label="تقليل">−</button>
          </div>
          <button class="rm-btn" data-rm="${esc(key)}">حذف</button>
        </div>
      </div>`;
  }).join('');

  if(foot){
    foot.hidden = false;
    $('#sumSubtotal').textContent = fmt(cartSubtotal());
    $('#sumDelivery').textContent = fmt(deliveryFee());
    $('#sumTotal').textContent = fmt(cartTotal());
  }
}

/* ============================================================
   RENDERING — ORDERS
   ============================================================ */
function renderOrders(){
  const list = $('#ordersList');
  const empty = $('#ordersEmpty');
  if(!list) return;

  if(!state.orders.length){
    list.innerHTML = '';
    if(empty) empty.hidden = false;
    return;
  }
  if(empty) empty.hidden = true;

  const statusMap = {
    preparing: { label:'قيد التجهيز', cls:'preparing' },
    ready:     { label:'جاهز',        cls:'ready' },
    done:      { label:'تم الاستلام',  cls:'done' }
  };

  list.innerHTML = state.orders.map(o => {
    const st = statusMap[o.status] || statusMap.preparing;
    const d = new Date(o.date);
    const dateStr = d.toLocaleDateString('ar-EG', { day:'numeric', month:'long', year:'numeric' })
      + ' · ' + d.toLocaleTimeString('ar-EG', { hour:'2-digit', minute:'2-digit' });
    const lines = o.items.map(it => `
      <div class="order-line">
        <span class="nm">${esc(it.name)}${it.size ? ' ('+esc(getSize(it.size)?.name||'')+')' : ''}
          ${it.extras && it.extras.length ? '<span class="qt"> + ' + it.extras.map(e=>esc(getExtra(e)?.name||'')).join('، ') + '</span>' : ''}
        </span>
        <span class="qt">× ${it.qty} — ${fmt(it.lineTotal)}</span>
      </div>`).join('');
    return `
      <div class="order-card">
        <div class="order-head">
          <div>
            <strong>${esc(o.number)}</strong>
            <div class="date">${esc(dateStr)}</div>
          </div>
          <span class="status ${st.cls}">${st.label}</span>
        </div>
        <div class="order-items">${lines}</div>
        <div class="order-foot">
          <strong>${fmt(o.total)}</strong>
          <small>${o.deliveryType === 'pickup' ? 'استلام من الكافيه' : 'توصيل'} · ${o.items.length} منتج</small>
        </div>
      </div>`;
  }).join('');
}

/* ============================================================
   PRODUCT MODAL
   ============================================================ */
function openProductModal(id){
  const p = getProduct(id);
  if(!p) return;
  state.activeProduct = p;
  const size = p.sizes.length ? p.sizes.includes('medium') ? 'medium' : p.sizes[0] : '';
  state.productDraft = { size, extras:[], qty:1 };
  renderProductModal();
  $('#modalOverlay').hidden = false;
  const modal = $('#productModal');
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';
}
function closeProductModal(){
  $('#modalOverlay').hidden = true;
  const modal = $('#productModal');
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
  document.body.style.overflow = '';
  state.activeProduct = null;
  state.productDraft = null;
}

function renderProductModal(){
  const p = state.activeProduct;
  const d = state.productDraft;
  if(!p || !d) return;

  const unit = productBasePrice(p, d.size) + extrasPrice(d.extras);
  const total = unit * d.qty;
  const fav = isFav(p.id);

  const sizesHTML = p.sizes.length ? `
    <div class="pd-section">
      <strong>الحجم <span>· اختر مقاسك</span></strong>
      <div class="size-grid">
        ${p.sizes.map(sid => {
          const s = getSize(sid);
          if(!s) return '';
          const price = p.price + s.delta;
          return `<button class="size-opt ${d.size===sid?'active':''}" data-size="${sid}">
            <strong>${s.name}</strong>
            <small>${price} EGP</small>
          </button>`;
        }).join('')}
      </div>
    </div>` : '';

  const extrasHTML = p.extras.length ? `
    <div class="pd-section">
      <strong>الإضافات <span>· اختياري</span></strong>
      <div class="extra-list">
        ${p.extras.map(eid => {
          const e = getExtra(eid);
          if(!e) return '';
          const checked = d.extras.includes(eid);
          return `<button class="extra-opt ${checked?'checked':''}" data-extra="${eid}">
            <span class="cb"><svg viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg></span>
            <span class="extra-opt-body">
              <strong>${e.name}</strong>
              <small>+${e.price} EGP</small>
            </span>
          </button>`;
        }).join('')}
      </div>
    </div>` : '';

  $('#modalContent').innerHTML = `
    <div class="modal-img">
      <img src="${p.image}" alt="${esc(p.name)}" onerror="this.onerror=null;this.src='${FALLBACK}'">
    </div>
    <div class="modal-info">
      <div class="pd-head">
        <div>
          <h2>${esc(p.name)}</h2>
          <div class="pd-eng">${esc(p.englishName)}</div>
        </div>
        <button class="fav-btn ${fav?'active':''}" style="position:static;width:44px;height:44px" data-fav="${p.id}" aria-label="المفضلة">
          <svg viewBox="0 0 24 24"><path fill="${fav?'currentColor':'none'}" stroke="currentColor" stroke-width="2" stroke-linejoin="round" d="M12 21s-7-4.5-9.5-9C1 9 3 5 6.5 5 9 5 10.5 7 12 9c1.5-2 3-4 5.5-4C21 5 23 9 21.5 12c-2.5 4.5-9.5 9-9.5 9z"/></svg>
        </button>
      </div>
      <div class="pd-rating">
        <span class="rating">
          <svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/></svg>
          ${p.rating.toFixed(1)}
        </span>
        <span>· ${CATEGORIES.find(c=>c.id===p.category)?.name || ''}</span>
        ${p.popular ? '<span>· 🔥 الأكثر شعبية</span>' : ''}
      </div>
      <p class="pd-desc">${esc(p.description)}</p>
      ${sizesHTML}
      ${extrasHTML}
      <div class="pd-foot">
        <div class="pd-qty">
          <button data-pqty="inc" aria-label="زيادة">+</button>
          <span>${d.qty}</span>
          <button data-pqty="dec" aria-label="تقليل">−</button>
        </div>
        <div class="pd-price">${fmt(total)}<small>الإجمالي</small></div>
        <button class="btn btn-primary" id="pdAdd">أضف إلى السلة</button>
      </div>
    </div>`;
}

/* ============================================================
   CHECKOUT
   ============================================================ */
function openCheckout(){
  if(!state.cart.length){ toast('السلة فارغة', 'err'); return; }
  renderCheckoutSummary();
  $('#checkoutOverlay').hidden = false;
  const m = $('#checkoutModal');
  m.classList.add('open');
  m.setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';
}
function closeCheckout(){
  $('#checkoutOverlay').hidden = true;
  const m = $('#checkoutModal');
  m.classList.remove('open');
  m.setAttribute('aria-hidden','true');
  document.body.style.overflow = '';
}
function renderCheckoutSummary(){
  const el = $('#checkoutSummary');
  if(!el) return;
  el.innerHTML = `
    <div class="sum-row"><span>عدد المنتجات</span><strong>${cartCount()}</strong></div>
    <div class="sum-row"><span>الإجمالي الفرعي</span><strong>${fmt(cartSubtotal())}</strong></div>
    <div class="sum-row"><span>رسوم التوصيل</span><strong>${fmt(deliveryFee())}</strong></div>
    <div class="sum-row total"><span>الإجمالي</span><strong>${fmt(cartTotal())}</strong></div>`;
}
function validateCheckout(){
  let ok = true;
  const name = $('#ckName');
  const phone = $('#ckPhone');
  const address = $('#ckAddress');

  const setErr = (input, msg) => {
    const err = document.querySelector(`[data-err="${input.id}"]`);
    if(msg){ input.classList.add('invalid'); if(err) err.textContent = msg; ok = false; }
    else { input.classList.remove('invalid'); if(err) err.textContent = ''; }
  };

  setErr(name, name.value.trim().length < 2 ? 'الرجاء إدخال الاسم' : '');
  const phoneVal = phone.value.trim().replace(/\s/g,'');
  setErr(phone, /^0\d{9,14}$/.test(phoneVal) ? '' : 'رقم هاتف غير صالح (مثال: 01012345678)');

  if(state.checkoutDelivery === 'delivery'){
    setErr(address, address.value.trim().length < 5 ? 'الرجاء إدخال العنوان' : '');
  } else {
    setErr(address, '');
  }

  if(!ok) toast('الرجاء إكمال الحقول المطلوبة', 'err');
  return ok;
}

/* ============================================================
   SUCCESS MODAL
   ============================================================ */
function openSuccess(order){
  $('#successOrderNo').textContent = order.number;
  const payLabel = order.payment === 'cafe' ? 'الدفع في الكافيه' : 'الدفع عند الاستلام';
  const delLabel = order.deliveryType === 'pickup' ? 'استلام من الكافيه' : 'توصيل';
  $('#successInfo').innerHTML = `
    <div class="sum-row"><span>عدد المنتجات</span><strong>${order.items.reduce((s,i)=>s+i.qty,0)}</strong></div>
    <div class="sum-row"><span>الإجمالي</span><strong>${fmt(order.total)}</strong></div>
    <div class="sum-row"><span>طريقة الاستلام</span><strong>${delLabel}</strong></div>
    <div class="sum-row"><span>طريقة الدفع</span><strong>${payLabel}</strong></div>
    <div class="sum-row"><span>وقت التحضير المتوقع</span><strong>${order.prepTime}</strong></div>`;
  $('#successOverlay').hidden = false;
  const m = $('#successModal');
  m.classList.add('open');
  m.setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';
  // Simulate status progression
  setTimeout(()=>{ updateOrderStatus(order.id, 'ready'); }, 20000);
  setTimeout(()=>{ updateOrderStatus(order.id, 'done'); }, 60000);
}
function closeSuccess(){
  $('#successOverlay').hidden = true;
  const m = $('#successModal');
  m.classList.remove('open');
  m.setAttribute('aria-hidden','true');
  document.body.style.overflow = '';
}
function updateOrderStatus(orderId, status){
  const o = state.orders.find(x => x.id === orderId);
  if(!o) return;
  o.status = status;
  saveOrders();
  renderOrders();
}

/* ============================================================
   NAVIGATION
   ============================================================ */
function navigate(view){
  state.view = view;
  $$('.view').forEach(v => v.classList.toggle('active', v.id === 'view-' + view));
  $$('[data-nav]').forEach(el => {
    if(el.classList.contains('nav-link') || el.classList.contains('bn-item')){
      const active = el.dataset.nav === view;
      el.classList.toggle('active', active);
    }
  });
  window.scrollTo({ top:0, behavior:'smooth' });
  if(view === 'menu') renderMenu();
  if(view === 'favorites') renderFavorites();
  if(view === 'orders') renderOrders();
}

/* ============================================================
   CART DRAWER
   ============================================================ */
function openCart(){
  renderCart();
  $('#cartOverlay').hidden = false;
  const d = $('#cartDrawer');
  d.classList.add('open');
  d.setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';
}
function closeCart(){
  $('#cartOverlay').hidden = true;
  const d = $('#cartDrawer');
  d.classList.remove('open');
  d.setAttribute('aria-hidden','true');
  document.body.style.overflow = '';
}

/* ============================================================
   SEARCH
   ============================================================ */
function openSearch(){
  $('#searchBar').hidden = false;
  setTimeout(()=>$('#searchInput').focus(), 50);
}
function closeSearch(){
  $('#searchBar').hidden = true;
  state.search = '';
  const inp = $('#searchInput');
  if(inp) inp.value = '';
  if(state.view === 'menu') renderMenu();
}

/* ============================================================
   EVENT DELEGATION
   ============================================================ */
document.addEventListener('click', (e) => {
  const t = e.target;

  // Nav
  const navEl = t.closest('[data-nav]');
  if(navEl){
    const v = navEl.dataset.nav;
    if(v){ closeCart(); closeSuccess(); navigate(v); return; }
  }

  // Category (home + menu)
  const catEl = t.closest('[data-cat]');
  if(catEl){
    const id = catEl.dataset.cat;
    if(catEl.classList.contains('chip')){
      state.category = id;
      renderMenuCategories();
      renderMenu();
    } else {
      state.category = id;
      state.search = '';
      navigate('menu');
      renderMenuCategories();
      renderMenu();
    }
    return;
  }

  // Open product
  const openEl = t.closest('[data-open]');
  if(openEl){ openProductModal(openEl.dataset.open); return; }

  // Fav
  const favEl = t.closest('[data-fav]');
  if(favEl){
    e.stopPropagation();
    toggleFav(favEl.dataset.fav);
    if(state.activeProduct && state.activeProduct.id === favEl.dataset.fav) renderProductModal();
    return;
  }

  // Add to cart (card)
  const addEl = t.closest('[data-add]');
  if(addEl){
    e.stopPropagation();
    addToCart(addEl.dataset.add);
    return;
  }

  // Size
  const sizeEl = t.closest('[data-size]');
  if(sizeEl && state.productDraft){
    state.productDraft.size = sizeEl.dataset.size;
    renderProductModal();
    return;
  }

  // Extra
  const extraEl = t.closest('[data-extra]');
  if(extraEl && state.productDraft){
    const id = extraEl.dataset.extra;
    const arr = state.productDraft.extras;
    const idx = arr.indexOf(id);
    if(idx === -1) arr.push(id); else arr.splice(idx,1);
    renderProductModal();
    return;
  }

  // Product qty
  const pqtyEl = t.closest('[data-pqty]');
  if(pqtyEl && state.productDraft){
    if(pqtyEl.dataset.pqty === 'inc') state.productDraft.qty++;
    else state.productDraft.qty = Math.max(1, state.productDraft.qty - 1);
    renderProductModal();
    return;
  }

  // Add from modal
  if(t.closest('#pdAdd') && state.activeProduct && state.productDraft){
    const { size, extras, qty } = state.productDraft;
    addToCart(state.activeProduct.id, size, extras, qty);
    closeProductModal();
    return;
  }

  // Cart qty
  const qtyEl = t.closest('[data-qty]');
  if(qtyEl){
    const key = qtyEl.dataset.key;
    changeQty(key, qtyEl.dataset.qty === 'inc' ? 1 : -1);
    return;
  }

  // Remove
  const rmEl = t.closest('[data-rm]');
  if(rmEl){ removeFromCart(rmEl.dataset.rm); return; }

  // Close cart
  if(t.closest('#cartClose') || t.closest('[data-close-cart]')){ closeCart(); return; }

  // Clear cart
  if(t.closest('#clearCart')){ clearCart(); return; }

  // Checkout
  if(t.closest('#goCheckout')){ closeCart(); openCheckout(); return; }
  if(t.closest('#checkoutClose')){ closeCheckout(); return; }

  // Reset filters
  if(t.closest('#resetFilters')){
    state.category = 'all'; state.search = ''; state.sort = 'default';
    const inp = $('#searchInput'); if(inp) inp.value = '';
    const sel = $('#sortSelect'); if(sel) sel.value = 'default';
    renderMenuCategories(); renderMenu();
    return;
  }

  // Success actions
  if(t.closest('#successViewOrders')){ closeSuccess(); navigate('orders'); return; }
  if(t.closest('#successContinue')){ closeSuccess(); navigate('menu'); return; }

  // Modal close
  if(t.closest('#modalClose')){ closeProductModal(); return; }

  // Click outside modal
  if(t.id === 'modalOverlay' || t.id === 'cartOverlay' || t.id === 'checkoutOverlay' || t.id === 'successOverlay'){
    if(t.id === 'modalOverlay') closeProductModal();
    if(t.id === 'cartOverlay') closeCart();
    if(t.id === 'checkoutOverlay') closeCheckout();
    if(t.id === 'successOverlay') closeSuccess();
    return;
  }
});

/* ---------- Form / Inputs ---------- */
document.addEventListener('input', (e) => {
  if(e.target.id === 'searchInput'){
    state.search = e.target.value;
    if(state.view !== 'menu'){ navigate('menu'); }
    renderMenu();
  }
  if(e.target.id === 'ckName' || e.target.id === 'ckPhone' || e.target.id === 'ckAddress'){
    e.target.classList.remove('invalid');
    const err = document.querySelector(`[data-err="${e.target.id}"]`);
    if(err) err.textContent = '';
  }
});

document.addEventListener('change', (e) => {
  if(e.target.id === 'sortSelect'){
    state.sort = e.target.value;
    renderMenu();
  }
  if(e.target.name === 'delivery'){
    state.checkoutDelivery = e.target.value;
    const af = $('#addressField');
    const addr = $('#ckAddress');
    if(e.target.value === 'pickup'){
      af.style.display = 'none';
      addr.required = false;
      addr.classList.remove('invalid');
      const err = document.querySelector('[data-err="ckAddress"]'); if(err) err.textContent = '';
    } else {
      af.style.display = '';
      addr.required = true;
    }
    renderCheckoutSummary();
  }
  if(e.target.id === 'settingTheme'){
    applyTheme(e.target.checked ? 'dark' : 'light');
  }
});

/* ---------- Header buttons ---------- */
$('#themeToggle')?.addEventListener('click', toggleTheme);
$('#cartToggle')?.addEventListener('click', openCart);
$('#searchToggle')?.addEventListener('click', () => {
  const bar = $('#searchBar');
  if(bar.hidden) openSearch(); else closeSearch();
});
$('#searchClose')?.addEventListener('click', closeSearch);

/* ---------- Checkout submit ---------- */
$('#checkoutForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  if(!validateCheckout()) return;
  const customer = {
    name: $('#ckName').value.trim(),
    phone: $('#ckPhone').value.trim(),
    address: state.checkoutDelivery === 'delivery' ? $('#ckAddress').value.trim() : '',
    notes: $('#ckNotes').value.trim(),
    payment: document.querySelector('input[name="payment"]:checked')?.value || 'cod'
  };
  const order = createOrder(customer);
  closeCheckout();
  e.target.reset();
  state.checkoutDelivery = 'delivery';
  $('#addressField').style.display = '';
  renderCheckoutSummary();
  openSuccess(order);
});

/* ---------- Keyboard ---------- */
document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape'){
    if($('#productModal').classList.contains('open')) closeProductModal();
    else if($('#checkoutModal').classList.contains('open')) closeCheckout();
    else if($('#successModal').classList.contains('open')) closeSuccess();
    else if($('#cartDrawer').classList.contains('open')) closeCart();
    else if(!$('#searchBar').hidden) closeSearch();
  }
});

/* ============================================================
   INITIALIZATION
   ============================================================ */
function init(){
  // Theme
  const savedTheme = safeParse(STORAGE.theme, 'light');
  applyTheme(savedTheme === 'dark' ? 'dark' : 'light');

  // Favorites
  const favs = safeParse(STORAGE.fav, []);
  if(Array.isArray(favs)) state.favorites = new Set(favs.filter(id => getProduct(id)));

  // Cart — validate items
  const cart = safeParse(STORAGE.cart, []);
  if(Array.isArray(cart)){
    state.cart = cart.filter(i =>
      i && typeof i === 'object' && getProduct(i.productId) &&
      typeof i.qty === 'number' && i.qty > 0
    ).map(i => ({
      productId: i.productId,
      size: i.size || '',
      extras: Array.isArray(i.extras) ? i.extras.filter(getExtra) : [],
      qty: Math.max(1, Math.floor(i.qty))
    }));
  }

  // Orders — validate
  const orders = safeParse(STORAGE.orders, []);
  if(Array.isArray(orders)){
    state.orders = orders.filter(o => o && o.number && Array.isArray(o.items));
  }

  // Render
  renderHome();
  renderMenuCategories();
  renderMenu();
  renderFavorites();
  renderOrders();
  updateCartUI();

  // Nav initial
  navigate('home');

  // Bottom nav height for mobile
  const bn = document.querySelector('.bottom-nav');
  if(bn && getComputedStyle(bn).display !== 'none'){
    document.documentElement.style.setProperty('--bn-h', bn.offsetHeight + 'px');
  }
  window.addEventListener('resize', () => {
    if(getComputedStyle(bn).display !== 'none'){
      document.documentElement.style.setProperty('--bn-h', bn.offsetHeight + 'px');
    } else {
      document.documentElement.style.setProperty('--bn-h', '0px');
    }
  });

  console.log('%c☕ MK Café Web Edition ready', 'color:#C8843C;font-weight:bold;font-size:14px');
}

document.addEventListener('DOMContentLoaded', init);