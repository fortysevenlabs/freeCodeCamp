function spinalCase(str) {
  // don't really like this
  return str.replace(/\s|_/g, "-").
            replace(/([A-Z])/g,'-$&').
            replace(/[-]+/g, "-").
            replace(/^-|-$/g, "").
            toLowerCase();
}

spinalCase('This Is Spinal Tap');
spinalCase("AllThe-small Things");
spinalCase("The_Andy_Griffith_Show")
