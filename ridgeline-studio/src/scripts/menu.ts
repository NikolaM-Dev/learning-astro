function booleanParse(payload: string): [boolean, null | string] {
  if (payload === "true") {
    return [true, null];
  } else if (payload === "false") {
    return [false, null];
  } else {
    return [false, `[ERROR] Invalid boolean value ${payload}`];
  }
}

function main() {
  const btnMenu = document.querySelector<HTMLButtonElement>(".btn-menu");
  if (btnMenu === null) {
    console.error("[ERROR] `btn-menu` element is not defined");
    return;
  }

  const mobileMenu = document.querySelector<HTMLDivElement>(".mobile-menu");
  if (mobileMenu === null) {
    console.error("[ERROR] `mobile-menu` element is not defined");
    return;
  }

  const ATTRIBUTE_ID = "aria-expanded";
  btnMenu.addEventListener("click", () => {
    let isExpandedStr = btnMenu.getAttribute(ATTRIBUTE_ID);
    if (isExpandedStr === null) {
      console.error(`[ERROR] ${ATTRIBUTE_ID} attribute is missing`);
      return;
    }

    const [isExpanded, error] = booleanParse(isExpandedStr);
    if (error !== null) {
      console.error(error);
      return;
    }

    btnMenu.setAttribute(ATTRIBUTE_ID, String(!isExpanded));
    mobileMenu.classList.toggle("hidden", isExpanded);
  });
}

main();
