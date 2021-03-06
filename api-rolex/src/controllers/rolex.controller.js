const rolexService = require('../services/rolex.service');

const allRolexController = (req, res) => {
  const allRlx = rolexService.allRolexService();
  res.send(allRlx);
};

const rlxIdController = (req, res) => {
  const idParam = req.params.id;
  if (!idParam) {
    return res.status(404).send({ message: "Relógio indisponível!" })
  }
  const getRlx = rolexService.rlxIdService(idParam);
  res.send(getRlx);
};

const createRolexController = (req, res) => {
    const rlx = req.body;
    if (
      !rlx ||
      !rlx.name ||
      !rlx.description ||
      !rlx.specifications||
      !rlx.price||
      !rlx.img
    ) {
      return res.status(400).send({mensagem:'Prencha todos os dados para adicionar um relógio novo!'});
    }
    const newRlx = rolexService.createRolexService(rlx);
    res.send(newRlx);
  };
  
  const updateRolexController = (req, res) => {
    const idParam = +req.params.id;
    const rolexEdit = req.body;

    if (!idParam) {
      return res.status(404).send({ message: "Relógio indisponível!" })
    }

    if (!rolexEdit || !rolexEdit.name || !rolexEdit.description || !rolexEdit.img  || !rolexEdit.price || !rolexEdit.specifications) {


      return res.status(400).send({ message: "Preencha todos os dados para editar o relógio!" });
    }
    const updateRolex = rolexService.updateRolexService(idParam, rolexEdit);
    res.send(updateRolex);
  };
  
  const deleteRolexController = (req, res) => {
    const idParam = Number(req.params.id);

    if (!idParam) {
      return res.status(404).send({ message: "Relógio indisponível!" })
    }
    rolexService.deleteRolexService(idParam);
    res.send({ message: 'Relógio deletado com sucesso!' });
  };

module.exports = {
    allRolexController,
    rlxIdController,
    createRolexController,
    updateRolexController,
    deleteRolexController,
};
