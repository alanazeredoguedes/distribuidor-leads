<template>
  <form id="formEditarEmpresa" @submit.prevent="editEmpresa()" class="form d-flex flex-column flex-lg-row fv-plugins-bootstrap5 fv-plugins-framework">
    <div class="d-flex flex-column gap-7 gap-lg-10 w-100 w-lg-300px mb-7 me-lg-10">

      <div class="card card-flush py-4">

        <div class="card-header">
          <div class="card-title">
            <h2>Logo</h2>
          </div>
        </div>

        <div class="card-body text-center pt-0">
          <div class="image-input image-input-empty image-input-outline image-input-placeholder mb-3" data-kt-image-input="true" style="<br /> <b>Warning</b>: Undefined variable $imageBg in <b>C:\wamp64\www\keenthemes\core\html\dist\view\pages\apps\ecommerce\catalog\edit-product\_thumbnail.php</b> on line <b>30</b><br />">
            <div class="image-input-wrapper w-200px h-150px" :style="'background-image: url('+ getLogo() +')'"></div>
            <label class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="change" data-bs-toggle="tooltip" data-kt-initialized="1">
              <i class="bi bi-pencil-fill fs-7"></i>
              <input type="file" name="logo" accept=".png, .jpg, .jpeg">
              <!--              <input type="hidden" name="avatar_remove">-->
            </label>
            <span class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="cancel" data-bs-toggle="tooltip" data-kt-initialized="1">
              <i class="bi bi-x fs-2"></i>
            </span>
            <span class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="remove" data-bs-toggle="tooltip" data-kt-initialized="1">
              <i class="bi bi-x fs-2"></i>
            </span>
          </div>
          <div class="text-muted fs-7">Escolha imagens nos seguintes formatos: *.png, *.jpg e *.jpeg </div>
        </div>

      </div>

      <div class="card card-flush py-4">
        <div class="card-header">
          <div class="card-title">
            <h2>Status</h2>
          </div>
          <div class="card-toolbar">
            <div class="rounded-circle bg-success w-15px h-15px" id="kt_ecommerce_add_product_status"></div>
          </div>
        </div>
        <div class="card-body pt-0">
          <select class="form-select mb-2 select2-hidden-accessible" data-control="select2" data-hide-search="true" data-placeholder="Select an option" id="kt_ecommerce_add_product_status_select" data-select2-id="select2-data-kt_ecommerce_add_product_status_select" tabindex="-1" aria-hidden="true" data-kt-initialized="1">
            <option></option>
            <option value="published" selected="selected" data-select2-id="select2-data-11-zjtw">Published</option>
            <option value="draft">Draft</option>
            <option value="scheduled">Scheduled</option>
            <option value="inactive">Inactive</option>
          </select><span class="select2 select2-container select2-container--bootstrap5" dir="ltr" data-select2-id="select2-data-10-q9dl" style="width: 100%;"><span class="selection"><span class="select2-selection select2-selection--single form-select mb-2" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-kt_ecommerce_add_product_status_select-container" aria-controls="select2-kt_ecommerce_add_product_status_select-container"><span class="select2-selection__rendered" id="select2-kt_ecommerce_add_product_status_select-container" role="textbox" aria-readonly="true" title="Published">Published</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
          <div class="text-muted fs-7">Set the product status.</div>
          <div class="d-none mt-10">
            <label for="kt_ecommerce_add_product_status_datepicker" class="form-label">Select publishing date and time</label>
            <input class="form-control flatpickr-input" id="kt_ecommerce_add_product_status_datepicker" placeholder="Pick date &amp; time" type="text" readonly="readonly">
          </div>
        </div>
      </div>
      <div class="card card-flush">
        <div class="card-header pt-5">
          <div class="card-title d-flex flex-column">
            <div class="d-flex align-items-center">
              <span class="fs-4 fw-semibold text-gray-400 me-1 align-self-start"></span>
              <span class="fs-2hx fw-bold text-dark me-2 lh-1 ls-n2">2,420</span>
              <span class="badge badge-light-success fs-base">
                <span class="svg-icon svg-icon-5 svg-icon-success ms-n1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="currentColor"></rect>
                    <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor"></path>
                  </svg>
                </span>2.6%
              </span>
            </div>
            <span class="text-gray-400 pt-1 fw-semibold fs-6">Leads por semana</span>
          </div>
        </div>
        <div class="card-body d-flex align-items-end px-0 pb-0">
          <div id="kt_card_widget_6_chart" class="w-100" style="height: 80px; min-height: 80px;"><div id="apexcharts813ndngak" class="apexcharts-canvas apexcharts813ndngak apexcharts-theme-light" style="width: 300px; height: 80px;"><svg id="SvgjsSvg1055" width="300" height="80" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev" class="apexcharts-svg" xmlns:data="ApexChartsNS" transform="translate(0, 0)" style="background: transparent;"><g id="SvgjsG1057" class="apexcharts-inner apexcharts-graphical" transform="translate(36.111111111111114, 0)"><defs id="SvgjsDefs1056"><clipPath id="gridRectMask813ndngak"><rect id="SvgjsRect1060" width="292.99999999999994" height="89" x="-28.61111111111111" y="-4.5" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath><clipPath id="forecastMask813ndngak"></clipPath><clipPath id="nonForecastMask813ndngak"></clipPath><clipPath id="gridRectMarkerMask813ndngak"><rect id="SvgjsRect1061" width="239.77777777777777" height="84" x="-2" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath></defs><g id="SvgjsG1080" class="apexcharts-xaxis" transform="translate(0, 0)"><g id="SvgjsG1081" class="apexcharts-xaxis-texts-g" transform="translate(0, -4)"></g></g><g id="SvgjsG1089" class="apexcharts-grid"><g id="SvgjsG1090" class="apexcharts-gridlines-horizontal" style="display: none;"><line id="SvgjsLine1092" x1="-22.11111111111111" y1="0" x2="257.88888888888886" y2="0" stroke="#e4e6ef" stroke-dasharray="4" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine1093" x1="-22.11111111111111" y1="20" x2="257.88888888888886" y2="20" stroke="#e4e6ef" stroke-dasharray="4" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine1094" x1="-22.11111111111111" y1="40" x2="257.88888888888886" y2="40" stroke="#e4e6ef" stroke-dasharray="4" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine1095" x1="-22.11111111111111" y1="60" x2="257.88888888888886" y2="60" stroke="#e4e6ef" stroke-dasharray="4" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine1096" x1="-22.11111111111111" y1="80" x2="257.88888888888886" y2="80" stroke="#e4e6ef" stroke-dasharray="4" stroke-linecap="butt" class="apexcharts-gridline"></line></g><g id="SvgjsG1091" class="apexcharts-gridlines-vertical" style="display: none;"></g><line id="SvgjsLine1098" x1="0" y1="80" x2="235.77777777777777" y2="80" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt"></line><line id="SvgjsLine1097" x1="0" y1="1" x2="0" y2="80" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt"></line></g><g id="SvgjsG1062" class="apexcharts-bar-series apexcharts-plot-series"><g id="SvgjsG1063" class="apexcharts-series" rel="1" seriesName="Sales" data:realIndex="0"><path id="SvgjsPath1067" d="M -10.80648148148148 80L -10.80648148148148 56Q -10.80648148148148 50 -4.80648148148148 50L -4.19351851851852 50Q 1.8064814814814802 50 1.8064814814814802 56L 1.8064814814814802 56L 1.8064814814814802 80L 1.8064814814814802 80z" fill="rgba(0,158,247,0.85)" fill-opacity="1" stroke="transparent" stroke-opacity="1" stroke-linecap="round" stroke-width="9" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMask813ndngak)" pathTo="M -10.80648148148148 80L -10.80648148148148 56Q -10.80648148148148 50 -4.80648148148148 50L -4.19351851851852 50Q 1.8064814814814802 50 1.8064814814814802 56L 1.8064814814814802 56L 1.8064814814814802 80L 1.8064814814814802 80z" pathFrom="M -10.80648148148148 80L -10.80648148148148 80L 1.8064814814814802 80L 1.8064814814814802 80L 1.8064814814814802 80L 1.8064814814814802 80L 1.8064814814814802 80L -10.80648148148148 80" cy="50" cx="6.30648148148148" j="0" val="30" barHeight="30" barWidth="21.61296296296296"></path><path id="SvgjsPath1069" d="M 28.48981481481481 80L 28.48981481481481 26Q 28.48981481481481 20 34.48981481481481 20L 35.102777777777774 20Q 41.102777777777774 20 41.102777777777774 26L 41.102777777777774 26L 41.102777777777774 80L 41.102777777777774 80z" fill="rgba(0,158,247,0.85)" fill-opacity="1" stroke="transparent" stroke-opacity="1" stroke-linecap="round" stroke-width="9" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMask813ndngak)" pathTo="M 28.48981481481481 80L 28.48981481481481 26Q 28.48981481481481 20 34.48981481481481 20L 35.102777777777774 20Q 41.102777777777774 20 41.102777777777774 26L 41.102777777777774 26L 41.102777777777774 80L 41.102777777777774 80z" pathFrom="M 28.48981481481481 80L 28.48981481481481 80L 41.102777777777774 80L 41.102777777777774 80L 41.102777777777774 80L 41.102777777777774 80L 41.102777777777774 80L 28.48981481481481 80" cy="20" cx="45.602777777777774" j="1" val="60" barHeight="60" barWidth="21.61296296296296"></path><path id="SvgjsPath1071" d="M 67.7861111111111 80L 67.7861111111111 33Q 67.7861111111111 27 73.7861111111111 27L 74.39907407407406 27Q 80.39907407407406 27 80.39907407407406 33L 80.39907407407406 33L 80.39907407407406 80L 80.39907407407406 80z" fill="rgba(0,158,247,0.85)" fill-opacity="1" stroke="transparent" stroke-opacity="1" stroke-linecap="round" stroke-width="9" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMask813ndngak)" pathTo="M 67.7861111111111 80L 67.7861111111111 33Q 67.7861111111111 27 73.7861111111111 27L 74.39907407407406 27Q 80.39907407407406 27 80.39907407407406 33L 80.39907407407406 33L 80.39907407407406 80L 80.39907407407406 80z" pathFrom="M 67.7861111111111 80L 67.7861111111111 80L 80.39907407407406 80L 80.39907407407406 80L 80.39907407407406 80L 80.39907407407406 80L 80.39907407407406 80L 67.7861111111111 80" cy="27" cx="84.89907407407406" j="2" val="53" barHeight="53" barWidth="21.61296296296296"></path><path id="SvgjsPath1073" d="M 107.0824074074074 80L 107.0824074074074 41Q 107.0824074074074 35 113.0824074074074 35L 113.69537037037037 35Q 119.69537037037037 35 119.69537037037037 41L 119.69537037037037 41L 119.69537037037037 80L 119.69537037037037 80z" fill="rgba(0,158,247,0.85)" fill-opacity="1" stroke="transparent" stroke-opacity="1" stroke-linecap="round" stroke-width="9" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMask813ndngak)" pathTo="M 107.0824074074074 80L 107.0824074074074 41Q 107.0824074074074 35 113.0824074074074 35L 113.69537037037037 35Q 119.69537037037037 35 119.69537037037037 41L 119.69537037037037 41L 119.69537037037037 80L 119.69537037037037 80z" pathFrom="M 107.0824074074074 80L 107.0824074074074 80L 119.69537037037037 80L 119.69537037037037 80L 119.69537037037037 80L 119.69537037037037 80L 119.69537037037037 80L 107.0824074074074 80" cy="35" cx="124.19537037037037" j="3" val="45" barHeight="45" barWidth="21.61296296296296"></path><path id="SvgjsPath1075" d="M 146.37870370370368 80L 146.37870370370368 26Q 146.37870370370368 20 152.37870370370368 20L 152.99166666666665 20Q 158.99166666666665 20 158.99166666666665 26L 158.99166666666665 26L 158.99166666666665 80L 158.99166666666665 80z" fill="rgba(0,158,247,0.85)" fill-opacity="1" stroke="transparent" stroke-opacity="1" stroke-linecap="round" stroke-width="9" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMask813ndngak)" pathTo="M 146.37870370370368 80L 146.37870370370368 26Q 146.37870370370368 20 152.37870370370368 20L 152.99166666666665 20Q 158.99166666666665 20 158.99166666666665 26L 158.99166666666665 26L 158.99166666666665 80L 158.99166666666665 80z" pathFrom="M 146.37870370370368 80L 146.37870370370368 80L 158.99166666666665 80L 158.99166666666665 80L 158.99166666666665 80L 158.99166666666665 80L 158.99166666666665 80L 146.37870370370368 80" cy="20" cx="163.49166666666665" j="4" val="60" barHeight="60" barWidth="21.61296296296296"></path><path id="SvgjsPath1077" d="M 185.67499999999998 80L 185.67499999999998 11Q 185.67499999999998 5 191.67499999999998 5L 192.28796296296295 5Q 198.28796296296295 5 198.28796296296295 11L 198.28796296296295 11L 198.28796296296295 80L 198.28796296296295 80z" fill="rgba(0,158,247,0.85)" fill-opacity="1" stroke="transparent" stroke-opacity="1" stroke-linecap="round" stroke-width="9" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMask813ndngak)" pathTo="M 185.67499999999998 80L 185.67499999999998 11Q 185.67499999999998 5 191.67499999999998 5L 192.28796296296295 5Q 198.28796296296295 5 198.28796296296295 11L 198.28796296296295 11L 198.28796296296295 80L 198.28796296296295 80z" pathFrom="M 185.67499999999998 80L 185.67499999999998 80L 198.28796296296295 80L 198.28796296296295 80L 198.28796296296295 80L 198.28796296296295 80L 198.28796296296295 80L 185.67499999999998 80" cy="5" cx="202.78796296296295" j="5" val="75" barHeight="75" barWidth="21.61296296296296"></path><path id="SvgjsPath1079" d="M 224.9712962962963 80L 224.9712962962963 33Q 224.9712962962963 27 230.9712962962963 27L 231.58425925925926 27Q 237.58425925925926 27 237.58425925925926 33L 237.58425925925926 33L 237.58425925925926 80L 237.58425925925926 80z" fill="rgba(0,158,247,0.85)" fill-opacity="1" stroke="transparent" stroke-opacity="1" stroke-linecap="round" stroke-width="9" stroke-dasharray="0" class="apexcharts-bar-area" index="0" clip-path="url(#gridRectMask813ndngak)" pathTo="M 224.9712962962963 80L 224.9712962962963 33Q 224.9712962962963 27 230.9712962962963 27L 231.58425925925926 27Q 237.58425925925926 27 237.58425925925926 33L 237.58425925925926 33L 237.58425925925926 80L 237.58425925925926 80z" pathFrom="M 224.9712962962963 80L 224.9712962962963 80L 237.58425925925926 80L 237.58425925925926 80L 237.58425925925926 80L 237.58425925925926 80L 237.58425925925926 80L 224.9712962962963 80" cy="27" cx="242.08425925925926" j="6" val="53" barHeight="53" barWidth="21.61296296296296"></path><g id="SvgjsG1065" class="apexcharts-bar-goals-markers" style="pointer-events: none"><g id="SvgjsG1066" className="apexcharts-bar-goals-groups"></g><g id="SvgjsG1068" className="apexcharts-bar-goals-groups"></g><g id="SvgjsG1070" className="apexcharts-bar-goals-groups"></g><g id="SvgjsG1072" className="apexcharts-bar-goals-groups"></g><g id="SvgjsG1074" className="apexcharts-bar-goals-groups"></g><g id="SvgjsG1076" className="apexcharts-bar-goals-groups"></g><g id="SvgjsG1078" className="apexcharts-bar-goals-groups"></g></g></g><g id="SvgjsG1064" class="apexcharts-datalabels" data:realIndex="0"></g></g><line id="SvgjsLine1099" x1="-22.11111111111111" y1="0" x2="257.88888888888886" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" stroke-linecap="butt" class="apexcharts-ycrosshairs"></line><line id="SvgjsLine1100" x1="-22.11111111111111" y1="0" x2="257.88888888888886" y2="0" stroke-dasharray="0" stroke-width="0" stroke-linecap="butt" class="apexcharts-ycrosshairs-hidden"></line><g id="SvgjsG1101" class="apexcharts-yaxis-annotations"></g><g id="SvgjsG1102" class="apexcharts-xaxis-annotations"></g><g id="SvgjsG1103" class="apexcharts-point-annotations"></g></g><g id="SvgjsG1088" class="apexcharts-yaxis" rel="0" transform="translate(-18, 0)"></g><g id="SvgjsG1058" class="apexcharts-annotations"></g></svg><div class="apexcharts-legend" style="max-height: 40px;"></div><div class="apexcharts-tooltip apexcharts-theme-light"><div class="apexcharts-tooltip-title" style="font-family: inherit; font-size: 12px;"></div><div class="apexcharts-tooltip-series-group" style="order: 1;"><span class="apexcharts-tooltip-marker" style="background-color: rgb(0, 158, 247);"></span><div class="apexcharts-tooltip-text" style="font-family: inherit; font-size: 12px;"><div class="apexcharts-tooltip-y-group"><span class="apexcharts-tooltip-text-y-label"></span><span class="apexcharts-tooltip-text-y-value"></span></div><div class="apexcharts-tooltip-goals-group"><span class="apexcharts-tooltip-text-goals-label"></span><span class="apexcharts-tooltip-text-goals-value"></span></div><div class="apexcharts-tooltip-z-group"><span class="apexcharts-tooltip-text-z-label"></span><span class="apexcharts-tooltip-text-z-value"></span></div></div></div></div><div class="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light"><div class="apexcharts-yaxistooltip-text"></div></div></div></div>
        </div>
      </div>
    </div>

    <div class="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">

      <ul class="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-semibold mb-n2" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link text-active-primary pb-4 active" data-toggle="pill" data-target="#tab1" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Informações Gerais</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link text-active-primary pb-4" data-toggle="pill" data-target="#tab2" type="button" role="tab" aria-controls="pills-home" aria-selected="false">Sites</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link text-active-primary pb-4" data-toggle="pill" data-target="#tab3" type="button" role="tab" aria-controls="pills-home" aria-selected="false">Avançado</button>
        </li>
      </ul>



      <div class="tab-content" v-if="empresaStore.empresa">

        <div class="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="pills-home-tab">
          <div class="d-flex flex-column gap-7 gap-lg-10">
            <div class="card card-flush py-4">

              <div class="card-header">
                <div class="card-title">
                  <h2>Informações Gerais</h2>
                </div>
              </div>

              <div class="card-body pt-0">
                <div class="mb-10 fv-row fv-plugins-icon-container">
                  <label class="required form-label">Nome:</label>
                  <input type="text" name="Name" class="form-control mb-2" placeholder="Nome da Empresa" :value="empresaStore.empresa.nome" disabled>
                  <div class="text-muted fs-7">O nome da empresa deve ser unico</div>
                  <div class="fv-plugins-message-container invalid-feedback"></div>
                </div>

                <div class="mb-10 fv-row fv-plugins-icon-container">
                  <label class="required form-label">Prefixo:</label>
                  <input type="text" name="Name" class="form-control mb-2" placeholder="Nome da Empresa" :value="empresaStore.empresa.prefixo" disabled>
                  <div class="text-muted fs-7">O prefixo da empresa deve ser unico</div>
                </div>


                <div class="mb-10 fv-row fv-plugins-icon-container">
                  <label class="required form-label">Email</label>
                  <input type="text" name="email" class="form-control mb-2" placeholder="Email" v-model="empresaEdit.email">
                </div>

                <div class="mb-10 fv-row fv-plugins-icon-container">
                  <label class="required form-label">Telefone</label>
                  <input type="text" name="telefone" class="form-control mb-2" placeholder="Telefone" v-model="empresaEdit.telefone"  >
                </div>

              </div>
            </div>
          </div>
        </div>

        <div class="tab-pane fade show" id="tab2" role="tabpanel" aria-labelledby="pills-home-tab">
          <div class="d-flex flex-column gap-7 gap-lg-10">
            <div class="card card-flush py-4">

              <div class="card-header">
                <div class="card-title">
                  <h2>Sites</h2>
                </div>
              </div>

              <div class="card-body pt-0 row">

                <div class="col-12" >
                  <button style="float: right" type="button" data-toggle="modal" data-target="#modalCriarSite" class="btn btn-primary">
                    <span class="indicator-label">Novo Site</span>
                  </button>
                </div>

                <ModalNovoSite/>

                <div class="col-12" style="margin-top: 20px;">

                  <div class="form-group d-flex flex-wrap align-items-center gap-5" v-for="site in empresaStore.sites" style="margin-top: 10px;">
                    <input type="text" class="form-control mw-300 w-600px" placeholder="Url" :value="site.url">
                    <button type="button" @click="salvar" class="btn btn-sm btn-icon btn-light-primary">
                      <i class="bi bi-save"></i>
                    </button>
                    <button type="button" @click="excluir" class="btn btn-sm btn-icon btn-light-danger">
                      <i class="bi bi-x-lg"></i>
                    </button>
                  </div>

<!--                  <ShowSite/>-->

                </div>


                <br><br><br><br><br><br><br><br><br><br><br><br><br><br>
                <br><br><br><br><br><br><br><br><br><br><br><br><br><br>

              </div>


            </div>
          </div>
        </div>

        <div class="tab-pane fade show" id="tab2" role="tabpanel" aria-labelledby="pills-home-tab">
          <div class="d-flex flex-column gap-7 gap-lg-10">
            <div class="card card-flush py-4">

              <div class="card-header">
                <div class="card-title">
                  <h2>Avançado</h2>
                </div>
              </div>

              <div class="card-body pt-0">

                <br><br><br><br><br><br><br><br><br><br><br><br><br><br>
                <br><br><br><br><br><br><br><br><br><br><br><br><br><br>

              </div>


            </div>
          </div>
        </div>

      </div>

      <div class="d-flex justify-content-end">
        <button type="submit" class="btn btn-primary">
          <span class="indicator-label">Salvar</span>
        </button>
      </div>



    </div>
    <div>

    </div>
  </form>
</template>

<script setup>
import ModalNovoSite from "~/components/painel/empresas/ModalNovoSite.vue";

definePageMeta({
  layout: "painel",
  title: 'Editar Empresa',
  middleware: 'auth',
  auth: true,
})

import { URI } from "@/configs/api";
const baseUrl = URI
import {useEmpresaStore} from "~/stores/empresaStore";
const empresaStore = useEmpresaStore();
import {alerts} from "~/components/alerts";
import ShowSite from "~/components/painel/empresas/ShowSite.vue";
const route = useRoute();

const empresaEdit = reactive({
  email: '',
  telefone: '',
})

onMounted(()=>{
  getEmpresa()
  empresaStore.getSites(route.params.id);
})


const getLogo = ()=>{
  if(empresaStore.empresa){
    if(empresaStore.empresa.logo){
      return baseUrl + empresaStore.empresa.logo.url.referencia
    }
  }
  return ''
}

const getEmpresa = ()=>{
  alerts.notification('info', "Aguarde!", 'Consultando Informações!')

  empresaStore.getEmpresa(route.params.id)
      .then( response => {
        alerts.notification('success', "Sucesso", 'Sucesso ao carregar Empresa')
        empresaEdit.email = empresaStore.empresa.email
        empresaEdit.telefone = empresaStore.empresa.telefone
      })
      .catch( response => {
        alerts.notification('error', "Erro", 'Falha ao carregar Empresa')
        setTimeout(()=>{
          navigateTo({name: 'painel/empresas'})
        },1000)
      })
}

const editEmpresa = ()=>{

    const form = document.getElementById("formEditarEmpresa");
    const formData = new FormData(form);
    formData.append("empresa", route.params.id);
    formData.append("email", empresaEdit.email);
    formData.append("telefone", empresaEdit.telefone);

    alerts.notification('info', "Aguarde!", 'Atualizando Informações!')

    empresaStore.updateEmpresa(formData)
        .then( response => {
          alerts.notification('success', "Sucesso", 'Sucesso ao atualizar Empresa')
          setTimeout(()=>{
            getEmpresa(route.params.id)
          },1000)
        })
        .catch( response => {
          alerts.notification('error', "Erro", 'Falha ao atualizar Empresa')
        })
}


</script>