const siteName = "DWB Sports";

var regions = {
  region1: 'East',
  region2: 'Midwest',
  region3: 'South',
  region4: 'West'
};

var roundDates = {
  round1: 'March 14 & 15',
  round2: 'March 16 & 17',
  round3: 'March 21 & 22',
  round4: 'March 23 & 24',
  semis: 'March 30',
  champion: 'April 1'
};

var teams = {
  reg1_t1: {name: 'Vilanova', seed: 1},
  reg1_t16: {name: 'LIU Brooklyn/Radford', seed: 16},
  reg1_t8: {name: 'Virginia Tech', seed: 8},
  reg1_t9: {name: 'Alabama', seed: 9},
  reg1_t5: {name: 'West Virginia', seed: 5},
  reg1_t12: {name: 'Murray St.', seed: 12},
  reg1_t4: {name: 'Wichita St.', seed: 4},
  reg1_t13: {name: 'Marshall', seed: 13},
  reg1_t6: {name: 'Florida', seed: 6},
  reg1_t11: {name: 'St. Bonaventure/UCLA', seed: 11},
  reg1_t3: {name: 'Texas Tech', seed: 3},
  reg1_t14: {name: 'SFA', seed: 14},
  reg1_t7: {name: 'Arkansas', seed: 7},
  reg1_t10: {name: 'Butler', seed: 10},
  reg1_t2: {name: 'Purdue', seed: 2},
  reg1_t15: {name: 'Cal St. Fullerton', seed: 15},
  reg2_t1: {name: 'Kansas', seed: 1},
  reg2_t16: {name: 'Penn', seed: 16},
  reg2_t8: {name: 'Seton Hall', seed: 8},
  reg2_t9: {name: 'NC State', seed: 9},
  reg2_t5: {name: 'Clemson', seed: 5},
  reg2_t12: {name: 'New Mexico St.', seed: 12},
  reg2_t4: {name: 'Auburn', seed: 4},
  reg2_t13: {name: 'Charleston', seed: 13},
  reg2_t6: {name: 'TCU', seed: 6},
  reg2_t11: {name: 'Arizona St/Syracuse', seed: 11},
  reg2_t3: {name: 'Michigan St', seed: 3},
  reg2_t14: {name: 'Bucknell', seed: 14},
  reg2_t7: {name: 'Rhode Island', seed: 7},
  reg2_t10: {name: 'Oklahoma', seed: 10},
  reg2_t2: {name: 'Duke', seed: 2},
  reg2_t15: {name: 'Iona', seed: 15},
  reg3_t1: {name: 'Virginia', seed: 1},
  reg3_t16: {name: 'UMBC', seed: 16},
  reg3_t8: {name: 'Creighton', seed: 8},
  reg3_t9: {name: 'Kansas St.', seed: 9},
  reg3_t5: {name: 'Kentucky', seed: 5},
  reg3_t12: {name: 'Davidson', seed: 12},
  reg3_t4: {name: 'Arizona', seed: 4},
  reg3_t13: {name: 'Buffalo', seed: 13},
  reg3_t6: {name: 'Miami Fl.', seed: 6},
  reg3_t11: {name: 'Loyola-Chicago', seed: 11},
  reg3_t3: {name: 'Tennessee', seed: 3},
  reg3_t14: {name: 'Wright St.', seed: 14},
  reg3_t7: {name: 'Nevada', seed: 7},
  reg3_t10: {name: 'Texas', seed: 10},
  reg3_t2: {name: 'Cincinnati', seed: 2},
  reg3_t15: {name: 'Georgia St.', seed: 15},
  reg4_t1: {name: 'Xavier', seed: 1},
  reg4_t16: {name: 'NC Central/Texas So', seed: 16},
  reg4_t8: {name: 'Missouri', seed: 8},
  reg4_t9: {name: 'Florida St', seed: 9},
  reg4_t5: {name: 'Ohio St', seed: 5},
  reg4_t12: {name: 'South Dakota St', seed: 12},
  reg4_t4: {name: 'Gonzaga', seed: 4},
  reg4_t13: {name: 'UNC Greensboro', seed: 13},
  reg4_t6: {name: 'Houston', seed: 6},
  reg4_t11: {name: 'San Diego St', seed: 11},
  reg4_t3: {name: 'Michigan', seed: 3},
  reg4_t14: {name: 'Montana', seed: 14},
  reg4_t7: {name: 'Texas A&M', seed: 7},
  reg4_t10: {name: 'Providence', seed: 10},
  reg4_t2: {name: 'North Carolina', seed: 2},
  reg4_t15: {name: 'Lipscomb', seed: 15}
};

exports.homePage = (req, res)  => {
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    siteName
  });
};

exports.bracketPage =  (req, res) => {
  res.render('draw.hbs', {
    pageTitle: 'Bracket Page',
    siteName,
    regions,
    teams,
    roundDates
  });
};

exports.selectionPage =  (req, res) => {
  res.render('selection.hbs', {
    pageTitle: 'Selection Page',
    siteName,
    teams,
    regions,
    roundDates
  });
};
