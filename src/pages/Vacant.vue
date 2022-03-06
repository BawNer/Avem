<template>
  <q-page q-page padding>
    <div class="row" :class="!$q.screen.lt.md ? 'q-mx-xl' : ''">
      <div class="col-12">
        <q-table
          title="Информация о сроке действия государственной аккредитации образовательной программы, о языках, на которых осуществляется образование (обучение)"
          :rows="programsEducationRow"
          :columns="programsEducationKey"
          row-key="name"
          wrap-cells
        ></q-table>
      </div>
    </div>
  </q-page>
</template>

<script>
   export default {
    name: 'Education',
    setup() {
      const programsEducationKey = [
        { name: 'code', label: 'Код', field: 'code', align: 'left' },
        { name: 'named', label: 'Наименование', field: 'named', align: 'left' },
        { name: 'level', label: 'Уровень образования', field: 'level', align: 'left' },
        { name: 'course', label: 'Курс', field: 'course', align: 'left' },
        { name: 'form', label: 'Форма обучения (очная/заочная/очно-заочная)', field: 'forms', align: 'left' },
        { name: 'allocations', label: 'Кол-во мест за счет ассигнований федерального бюджета', field: 'allocations', align: 'left' },
        { name: 'subject', label: 'Кол-во мест за счет бюджетов субъектов Российской Федерации', field: 'subject', align: 'left' },
        { name: 'local', label: 'Кол-во мест за счет местных бюджетов', field: 'local', align: 'left' },
        { name: 'contract', label: 'Кол-во мест за счет по договорам об образовании за счет средств физических и (или) юридических лиц', field: 'contract', align: 'left' }
      ]
      const programsEducationRow = [
        { code: '09.03.01', named: 'Информатика и вычислительная техника', level: 'Бакалавриат', course: '1', form: 'очная', allocations: '3', subject: '0', local: '0', contract: '3' },
        { code: '09.03.01', named: 'Информатика и вычислительная техника', level: 'Бакалавриат', course: '1', form: 'заочная', allocations: '0', subject: '0', local: '0', contract: '10' },
        { code: '09.03.01', named: 'Информатика и вычислительная техника', level: 'Бакалавриат', course: '2', form: 'очная', allocations: '1', subject: '0', local: '0', contract: '2' },
        { code: '09.03.01', named: 'Информатика и вычислительная техника', level: 'Бакалавриат', course: '2', form: 'заочная', allocations: '0', subject: '0', local: '0', contract: '10' },
        { code: '09.03.01', named: 'Информатика и вычислительная техника', level: 'Бакалавриат', course: '3', form: 'очная', allocations: '1', subject: '0', local: '0', contract: '1' },
        { code: '09.03.01', named: 'Информатика и вычислительная техника', level: 'Бакалавриат', course: '3', form: 'заочная', allocations: '2', subject: '0', local: '0', contract: '10' },
        { code: '09.03.01', named: 'Информатика и вычислительная техника', level: 'Бакалавриат', course: '4', form: 'очная', allocations: '2', subject: '0', local: '0', contract: '4' },
        { code: '09.03.01', named: 'Информатика и вычислительная техника', level: 'Бакалавриат', course: '4', form: 'заочная', allocations: '1', subject: '0', local: '0', contract: '10' },
        { code: '09.03.01', named: 'Информатика и вычислительная техника', level: 'Бакалавриат', course: '5', form: 'заочная', allocations: '1', subject: '0', local: '0', contract: '0' },
        { code: '11.03.02', named: 'Инфокоммуникационные технологии и системы связи', level: 'Бакалавриат', course: '1', form: 'очная', allocations: '14', subject: '0', local: '0', contract: '6' },
        { code: '11.03.02', named: 'Инфокоммуникационные технологии и системы связи', level: 'Бакалавриат', course: '1', form: 'заочная', allocations: '0', subject: '0', local: '0', contract: '10' },
        { code: '09.03.01', named: 'Инфокоммуникационные технологии и системы связи', level: 'Бакалавриат', course: '2', form: 'очная', allocations: '6', subject: '0', local: '0', contract: '5' },
        { code: '09.03.01', named: 'Инфокоммуникационные технологии и системы связи', level: 'Бакалавриат', course: '2', form: 'заочная', allocations: '2', subject: '0', local: '0', contract: '10' },
        { code: '09.03.01', named: 'Инфокоммуникационные технологии и системы связи', level: 'Бакалавриат', course: '3', form: 'очная', allocations: '2', subject: '0', local: '0', contract: '5' },
        { code: '09.03.01', named: 'Инфокоммуникационные технологии и системы связи', level: 'Бакалавриат', course: '3', form: 'заочная', allocations: '2', subject: '0', local: '0', contract: '10' },
        { code: '09.03.01', named: 'Инфокоммуникационные технологии и системы связи', level: 'Бакалавриат', course: '4', form: 'очная', allocations: '2', subject: '0', local: '0', contract: '7' },
        { code: '09.03.01', named: 'Инфокоммуникационные технологии и системы связи', level: 'Бакалавриат', course: '4', form: 'заочная', allocations: '0', subject: '0', local: '0', contract: '10' },
        { code: '09.03.01', named: 'Инфокоммуникационные технологии и системы связи', level: 'Бакалавриат', course: '5', form: 'заочная', allocations: '3', subject: '0', local: '0', contract: '0' }
      ]

      return {
        programsEducationKey,
        programsEducationRow
      }
    }
  } 
</script>